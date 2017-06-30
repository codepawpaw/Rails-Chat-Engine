require 'test_helper'

class AuthControllerControllerTest < ActionController::TestCase
  test "should get connect" do
    get :connect
    assert_response :success
  end

end
