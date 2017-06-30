class MtfcController < ApplicationController
  def index
  	$redis.subscribe 'new_message' do |on|
	  on.message do |channel, msg|
	    puts "#{channel} says #{msg}"
	  end
	end
  end
end
