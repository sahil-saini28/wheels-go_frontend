<!-- SignupForm.svelte -->

<script>
  import { goto } from '$app/navigation';
   import "../../../src/app.css"
let user_email = '';
let password = '';
let errorMessage = '';

async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log(JSON.stringify({ user_email, password }))
  try {
    const response = await fetch('https://wheels2go.onrender.com/api/user/usersignin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_email, password }) ,
      // Update the data structure here
      
    });
     console.log(response)
    if (!response) {
      throw new Error('Sign-in failed');
    }

    const dataa = await response.json();
    console.log(dataa)
    if (!dataa.success || !dataa.auth_token) {
      throw new Error('Invalid response format');
    }

    // Add your logic for handling successful sign-in
    console.log('Sign-in successful');
    console.log('Auth token:', dataa.auth_token);
  
    // Reset the form fields after successful sign-in
    user_email = '';
    password = '';
    errorMessage = '';
    goto('/dealership')
  } catch (error) {
    errorMessage = 'Sign-in failed. Please try again.';
    console.error('Sign-in failed:', error.message);
  }
}



</script>
<p>{errorMessage}</p>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

    <p class="mt-4 text-gray-500">
      "Welcome to Wheels2Go - Your Premier Destination for Preowned Cars!

    </p>
  </div>
  <form  on:submit={handleSubmit}  class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
       
        type="email" bind:value={user_email}
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>

      <div class="relative">
        <input
        type="password" bind:value={password}
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        No account?
        <!-- <a class="underline" href="#">Sign up</a> -->
      </p>

      <button
      type="submit"
        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>
    </div>
  </form>
</div>