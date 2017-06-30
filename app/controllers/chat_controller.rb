require 'redis'

class ChatController < WebsocketRails::BaseController

  def new_message
    $redis.publish(:new_messsage, "Hello")
    broadcast_message :new_message, message
  end

  def client_connected
    #do something when client connected
    p "receive connection from client"
  end
end