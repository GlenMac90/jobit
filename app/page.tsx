export default function Home() {
  return (
    <div className="flex w-full flex-col gap-2">
      <button className="bg-natural-3_darkBG-3 p-2 text-natural-8">
        toggle
      </button>
      <div className="flex items-center justify-center bg-green-500 p-10 text-4xl text-natural-8 dark:bg-red-500">
        content
      </div>
      <div className="bg-white_darkBG-2 flex items-center justify-center p-10 text-4xl text-natural-8">
        content
      </div>
    </div>
  );
}
