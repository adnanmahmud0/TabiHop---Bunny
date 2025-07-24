

function App() {


  return (
    <>
      <div
        className="m-5  border-2 border-blue-500 px-[46px] py-[42px]"
      >
        <div className="font-semibold text-2xl my-[8px]">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </div>
        <div className="flex justify-between items-center my-[8px]">
          <div className="flex items-center gap-2 text-[#4D5461] text-sm font-medium">
            <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Tokiyo</button>
            <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Family</button>
            <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Food</button>
            <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Lighting</button>
          </div>
          <div>
            <button
              className="flex items-center gap-2 bg-[#E6F4FF] text-[#0088E8] font-medium py-1.5 rounded-xl border border-[#E5E7EA] px-8"
            >
              Share
              <img src="./share-ios.png" alt="icon" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between items-center my-[8px]">
          <img src="./Rectangle 24976.png" alt="city" />
          <img src="./Rectangle 24977.png" alt="village" />
          <img src="./Rectangle 24978.png" alt="food" />
        </div>
        <div className="flex justify-end">
          <a className="font-semibold text-[20px] underline" href="">View more 32+ pictures</a>
        </div>
      </div>
    </>
  )
}

export default App
