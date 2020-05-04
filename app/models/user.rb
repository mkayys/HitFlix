class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    
    attr_reader :password

    before_validation :ensure_session_token

    def self.find_by_creds(email, pw)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(pw) ? user : nil
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
