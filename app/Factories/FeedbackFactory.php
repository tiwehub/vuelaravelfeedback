<?php

namespace App\Factories;

use App\Models\Feedback;

class FeedbackFactory
{
    public static function create($type)
    {
        if ($type === 'database') {
            return new class {
                public function save($data)
                {
                    return Feedback::create($data);
                }
            };
        }

        throw new \Exception("Invalid save method type");
    }
}
