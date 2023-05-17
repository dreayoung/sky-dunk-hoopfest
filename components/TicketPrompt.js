export default function TicketPrompt({
  refr,
  setName,
  setInputName,
  error,
  inputName,
}) {
  return (
    <div className="container px-6 py-8 mx-auto">
      <h1 className="mt-4 tracking-wide text-3xl font-semibold text-center text-gray-800 uppercase lg:text-6xl dark:text-white">
        What&apos;s Your Name?
      </h1>

      <div className="mt-6 space-y-8 xl:mt-12">
        <div className="flex flex-col items-center justify-center space-y-2">
          <input
            type="text"
            name="user"
            onChange={(e) => setInputName(e.target.value)}
            ref={refr}
            className="input input-lg input-bordered w-full max-w-2xl bg-transparent"
          />
          {error ? (
            <p className="text-red-400 text-left">
              Your name must be more than 2 characters. Try again
            </p>
          ) : null}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setName()}
            disabled={inputName.length == 0}
            className={`fj px-8 py-2 tracking-wide ring-1 ring-white rounded-lg text-2xl ${
              inputName.length == 0
                ? 'text-zinc-600 ring-zinc-600'
                : 'text-white ring-white'
            } `}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
}
