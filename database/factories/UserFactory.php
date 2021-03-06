<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /*
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /*
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'firstname' => $this->faker->firstName(),
            'lastname' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'gender' => $this->faker->randomElement(['Male', 'Female', 'Other']),
            'avatar' => 'no-avatar.png',
            'about' => $this->faker->paragraph(),
            'is_verified' => 1
        ];
    }

    public function customName($name, $surname, $email)
    {
        return $this->state([
            'firstname' => $name,
            'lastname' => $surname,
            'email' => $email,
        ]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'is_verified' => 0,
            ];
        });
    }
}
