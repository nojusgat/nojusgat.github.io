<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Favorites extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_favorites', function (Blueprint $table) {
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('movie_id')->unsigned();

            $table->foreign('user_id')->references('id')->on('users');
            $table->unique(['user_id', 'movie_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movie_favorites');
    }
}