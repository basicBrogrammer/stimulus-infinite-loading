# frozen_string_literal: true

Rails.application.routes.draw do
  resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #
  root to: 'items#index'
  get 'async_items', to: 'async_items#index'
end
