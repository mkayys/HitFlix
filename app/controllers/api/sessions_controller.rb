class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_creds(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Invalid email/password"], status: 420
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render 'api/users/show'
        else
            render json: ["No one is signed in"], status: 418
        end
    end
end
