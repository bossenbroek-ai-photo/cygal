<script lang="ts">
  import NavBar from '../lib/NavBar.svelte';
</script>

<NavBar />

<div class="h-screen">
  <div class="h-96" />
  <div class="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
    <div class="bg-white rounded p-8 sm:p-12 -mt-72">
      <p class="text-3xl font-bold text-gray text-center">Get in touch</p>
      <form action="" method="post">
        <div class="md:flex items-center mt-12">
          <div class="w-full md:w-1/2 flex flex-col">
            <label class="text-gray font-semibold leading-none">Name</label>
            <input
              type="text"
              class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-100"
            />
          </div>
        </div>
        <div class="md:flex items-center mt-8">
          <div class="w-full flex flex-col">
            <label class="font-semibold text-gray leading-none">Subject</label>
            <input
              type="text"
              class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-100"
            />
          </div>
        </div>
        <div>
          <div class="w-full flex flex-col mt-8">
            <label class="font-semibold text-gray leading-none">Message</label>
            <textarea
              type="text"
              class="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-100"
            />
          </div>
        </div>
        <div class="flex items-center justify-center w-full">
          <button
            class="mt-9 font-semibold leading-none text-gray py-4 px-10 hover:underline focus:outline-none"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
