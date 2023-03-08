class RegistrationsController < ApplicationController

    def index
        @registrations = Registration.all

        render json: @users
    end
    
    # PATCH/PUT /registrations/1
    def create 
        @Registration = Registration.new(Registration_params)

        if @Registration.save
            render json: @Registration, status: :created, location: @Registration
        else
            render json: @Registration.errors, status:
            :unprocessable_entity
        end

    end

    def Registration_params
        params.require(:Registration).permit(:first_name, :last_name, :email, :how_often)
    end
end
