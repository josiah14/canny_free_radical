class RegistrationsController < Devise::RegistrationsController
  clear_respond_to
  respond_to :json

  def create
    user_params = devise_parameter_sanitizer.params.require(:user)
    user_params.require(:email)
    user_params.require(:password)
    devise_parameter_sanitizer.params[:user] = user_params.permit(:email, :password)
    super
  end
end
