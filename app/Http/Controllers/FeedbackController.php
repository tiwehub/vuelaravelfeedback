<?php

namespace App\Http\Controllers;

use App\Factories\FeedbackFactory;
use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->only(['name', 'message']);

        $feedback = FeedbackFactory::create('database');
        $feedback->save($data);

        return response()->json(['feedbacks' => Feedback::all()]);
    }
}
