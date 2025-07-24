import GoogleMapReact from 'google-map-react';
import ReactStars from 'react-stars';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div className="px-[23px] md:px-[46px] py-[21px] md:py-[42px] mx-auto max-w-7xl">
        {/* title, catagory, image */}
        <div>
          <div className="font-semibold text-2xl my-[8px]">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,
          </div>
          <div className="md:flex justify-between items-center my-[8px] ">
            <div className="flex flex-wrap items-center gap-2 text-[#4D5461] text-sm font-medium">
              <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Tokiyo</button>
              <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Family</button>
              <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Food</button>
              <button className="bg-[#E5E7EA] px-6 py-1 rounded-md">Lighting</button>
            </div>
            <div className='mt-[8px]'>
              <button
                className="flex items-center gap-2 bg-[#E6F4FF] text-[#0088E8] font-medium py-1.5 rounded-xl border border-[#E5E7EA] px-8"
              >
                Share
                <img src="./share-ios.png" alt="icon" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-between items-center my-[8px]">
            <img src="./image1.png" alt="city" />
            <img src="./image2.png" alt="village" />
            <img src="./image3.png" alt="food" />
          </div>
          <div className="flex justify-end my-[8px]">
            <a className="font-semibold text-[20px] underline" href="">View more 32+ pictures</a>
          </div>
        </div>
        {/* summary */}
        <div className='my-[10px]'>
          <div className="font-semibold text-2xl">
            Summary
          </div>
          <div className="text-[#6D717F] text-lg font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>
        </div>
        {/* read before... */}
        <div className='my-[10px]'>
          <div className="font-semibold text-2xl my-[8px]">
            Read before Visiting there
          </div>
          <div className="text-[#6D717F] text-lg font-medium">
            ~ Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
            ~ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
            ~ when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
            ~ It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br />
            ~ It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages <br />
          </div>
        </div>
        {/* map */}
        <div className='my-[10px]'>
          <div className="font-semibold text-2xl my-[8px]">
            View Location
          </div>
          <div className="w-full h-[400px] border-2 border-[#9EA2AE] rounded-xl">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
        {/* explore */}
        <div className='my-[10px]'>
          <div>
            <div className="font-semibold text-2xl my-[8px]">
              Explore Itinerary
            </div>
          </div>
          <div className='flex flex-wrap gap-4 justify-between items-center my-[8px]'>
            <div className='md:flex gap-4 items-center bg-[#FFF7F8] p-6 border border-[#9EA2AE] rounded-2xl'>
              <div>
                <div className='md:flex gap-4'>
                  <div className='font-medium text-2xl'>
                    Mercure Tokyo Haneda Airport
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      color1="#ccc"
                      color2="#f39c12"
                    />
                  </div>
                </div>

                <div className='font-medium text-lg text-[#131927]'>Ota Ward, Tokyo</div>
                <div className='font-medium text-[#4D5461] my-[8px]'>
                  Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                  as opposed to using Content here, content here', making it look like readable English.
                </div>
                <div className='font-medium text-[#4D5461] my-[8px]'>
                  Contact : +652 552 5855
                </div>
                <button className='bg-[#6E67D5] text-white py-[9px] px-[50px] rounded-xl font-medium'>View Details</button>
              </div>
              <div className='pt-4 md:pt-0'>
                <img src="./oskar-kadaksoo-i8fRj3z8bvk-unsplash.png" alt="itinerary" className='w-[600px] h-[200px] rounded-lg' />
              </div>
            </div>
          </div>
        </div>
        {/* comment */}
        <div>
          <div className="font-semibold text-2xl my-[8px]">
            Comments
          </div>
          <div className='flex gap-4 items-center my-[8px]'>
            <img
              src="./user.jpg"
              className='rounded-full w-[36px] h-[36px]'
              alt="" />
            <div>
              <div className='font-semibold'>
                Alisha Humphrey
              </div>
              <div className='text-[#6D717F] font-medium text-sm'>
                2 days ago
              </div>
            </div>
          </div>
          <div className='text-[#333333] font-semibold text-lg'>
            How to maintain NCLEX exam preparation along with full time job? I am also a single mother with 2 kids? Seeing this huge syllabus is impossible to me.
          </div>
          <div className='font-medium text-[#858585] text-[14px]'>
            3 answer <a href="" className='text-[#3063FF] underline'>see more</a>
          </div>
          <div className="flex items-center border border-[#6D717F] rounded-full px-4 py-3 w-full my-[8px]">
            <input
              type="text"
              placeholder="Write your answer"
              className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
            <button>
              <img src="/Vector.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
