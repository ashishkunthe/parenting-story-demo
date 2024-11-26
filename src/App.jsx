function App() {
  return (
    <div>
      <header className="bg-gray-100 text-gray-500 h-[100px] flex items-center justify-between px-8">
        {/* Left-aligned content */}
        <img
          src="cropped-cropped-cropped-uptodd-logo1.webp"
          alt="Uptodd Logo"
          className="w-32 h-auto"
        />
        {/* Right-aligned content */}
        <div className="flex space-x-8">
          <div className="hover:text-gray-700 cursor-pointer">Home</div>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full ring-2 ring-pink-600 hover:ring-pink-700 hover:bg-pink-700 transition duration-300 cursor-pointer capital uppercase">
            Explore Programs
          </button>
        </div>
      </header>
      <main className="bg-gray-200 py-10 flex justify-center">
        <div className="bg-white  ">
          <div className="max-w-4xl mx-auto space-y-10 text-center">
            {/* First Div */}
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-4xl font-bold text-gray-800 uppercase">
                Parenting Stories – Share Your Parenting Journey: Click,
                Connect, Inspire!
              </h1>
              <img
                src="SHARE-SHINE-1024x576.webp"
                alt="Parenting Stories"
                className="mx-auto w-[1024px] h-[500px] object-cover rounded-lg shadow-md"
              />

              <p className="text-gray-700 leading-relaxed">
                In the realm of parenting, every journey is a unique story
                waiting to be told. At UpTodd, we understand the power of your
                narrative, and we invite you to share your parenting journey
                effortlessly to become part of UpTodd Parenting Stories Series.
                In just 5 minutes, you can become a source of inspiration for
                millions, and your story will echo across our community.
              </p>
            </div>

            {/* Second Div */}
            <div className="space-y-4 bg-white p-8 rounded-lg shadow-md text-left">
              <h1 className="text-4xl font-semibold text-gray-800 uppercase">
                Why Share Your Parenting Story?
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Your experiences matter, and by sharing them, you contribute to
                a collective narrative that resonates with parents worldwide by
                becoming part of UpTodd Parenting Stories Series. We believe in
                the authenticity of your journey, and the simplicity of your
                story can be a beacon of hope for others navigating similar
                paths.
              </p>
            </div>

            {/* Third Div */}
            <div className="space-y-4 bg-white p-8 rounded-lg shadow-md text-left">
              <h1 className="text-4xl font-semibold text-gray-800 uppercase">
                How to Share Your Story:
              </h1>
              <p className="text-gray-700 leading-relaxed">
                <a href="#" className="text-blue-500 hover:underline">
                  Click here
                </a>{" "}
                to share your parenting story in a quick and easy 5-minute
                process. No hassles – just your authentic narrative.
              </p>
              <h1 className="text-4xl font-semibold text-gray-800 uppercase">
                What Happens Next:
              </h1>
              <ol className="list-disc pl-5 text-gray-700 leading-relaxed">
                <li>
                  <strong>Best Story of the Week:</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      We will feature the most compelling and authentic story on
                      our prominent platforms.
                    </li>
                    <li>
                      This includes Instagram, Facebook, a special blog on
                      UpTodd titled “A Lifetime Memory,” and our partner
                      channels reaching 3 million+ users.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Fourth Div */}
            <div className="space-y-4 bg-white p-8 rounded-lg shadow-md text-left">
              <h1 className="text-4xl font-semibold text-gray-800 uppercase">
                What’s in It for You?
              </h1>
              <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                <li>
                  <strong>Token of Appreciation:</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      Every parent will receive a special token of appreciation
                      from UpTodd for sharing their story.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Story of the Month:</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      UpTodd will highlight the best story each month in a
                      podcast we host.
                    </li>
                    <li>
                      The podcast will be circulated to partner e-news channels,
                      reaching an audience of 100 million+.
                    </li>
                    <li>
                      We will send a personalized goodie and plant a tree in
                      your baby’s name as a heartfelt gesture.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="space-y-4 bg-white p-8 rounded-lg shadow-md text-left">
              <h1 className="text-4xl font-semibold text-gray-800 uppercase">
                Conclusion:
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Your story is unique, and we want to make the process of sharing
                it as effortless as possible.{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Click here
                </a>{" "}
                to become a part of a community that celebrates the simplicity,
                joys, and challenges of parenthood. Let’s connect through the
                universal language of parenting stories and create a tapestry
                that resonates with parents worldwide. Are you ready to share
                your story in just 5 minutes?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Click here
                </a>{" "}
                and let’s embark on this inspiring journey together!
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center my-7.5  bg-gray-200">
            <button class="flex items-center text-pink-600 bg-transparent border-none hover:text-pink-800">
              <span class="mr-2">&#8592;</span>Previous Post
            </button>
            <button class="flex items-center text-pink-600 bg-transparent border-none hover:text-pink-800">
              Next Post <span class="ml-2">&#8594;</span>
            </button>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
            <h1 class="text-2xl font-semibold text-gray-800 mb-4">
              2 thoughts on “Parenting Stories – Share Your Parenting Journey:
              Click, Connect, Inspire!”
            </h1>
            <div class="flex items-center justify-between mb-4 my-10">
              <div class="flex items-center space-x-4">
                <img
                  src="download.png"
                  alt="Profile"
                  class="w-12 h-12 rounded-full border-2 border-pink-600 object-cover"
                />
                <div>
                  <a
                    href="#"
                    class="text-pink-600 font-semibold hover:underline"
                  >
                    sklep online
                  </a>
                  <p class="text-sm text-gray-500">March 20, 2024 at 6:56 am</p>
                </div>
              </div>

              <button class="px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition duration-300">
                Reply
              </button>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto  mt-28">
            <form>
              <h1 class="text-2xl font-semibold text-gray-800 mb-4">
                Leave a Comment
              </h1>
              <p class="text-sm text-gray-500 mb-6">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <textarea
                name="description"
                placeholder="Your comment..."
                rows="4"
                class="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 resize"
              ></textarea>

              <div class="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  class="w-1/3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
                <input
                  type="text"
                  placeholder="Email"
                  class="w-1/3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
                <input
                  type="text"
                  placeholder="Website"
                  class="w-1/3 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>

              <div class="flex items-center mb-6">
                <input type="checkbox" class="mr-2 rounded-sm" />
                <span class="text-gray-600">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer class="bg-violet-600 text-white py-12 mt-12">
        <div class="max-w-6xl mx-auto px-4">
          <div class="mb-8">
            <h2 class="text-3xl font-semibold mb-4">About UpTodd</h2>
            <p class="text-lg leading-relaxed mr-8">
              At UpTodd, we've carefully curated our approach by leveraging
              insights from over 10,000+ research papers and tapping into the
              expertise of professionals from prestigious institutions like MIT,
              Stanford, IITs, and AIIMS. Our program integrates techniques from
              globally recognized methodologies, including early stimulation
              from Glenn Doman, Montessori's emphasis on independence and
              exploration, Howard Gardner's theory of multiple intelligences
              from Harvard University, Waldorf's holistic approach, the Reggio
              Emilia Approach's focus on creativity, indigenous parenting and
              mindful parenting. This comprehensive approach empowers babies
              worldwide to thrive and reach their full potential with
              evidence-based guidance.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-semibold mb-4">Our Journey</h2>
            <p class="text-lg leading-relaxed mr-8 mb-4">
              In 2015, three passionate individuals embarked on a mission to
              uplift children's lives. As they ran an education-focused NGO,
              they uncovered a shared concern – young minds with untapped
              potential, hindered by foundational gaps.
            </p>
            <p class="text-lg leading-relaxed mr-8 mb-4">
              After conducting extensive meetings with more than 5,000 parents
              of babies aged 0-5, which included their own families, a shared
              aspiration became evident: to provide the brightest possible
              future to the child. But they observed challenges arising from the
              rapid pace of the contemporary world, leading to a decline in
              access to natural socialization & outdoor experiences that were
              once readily available. Additionally, there was a notable absence
              of guidance to help unlock the untapped potential of the babies.
              So, in collaboration with esteemed experts, we developed a
              tailored solution aimed at promoting brain development &
              delivering essentials. The results were astounding.
            </p>
            <p class="text-lg leading-relaxed mr-8 mb-4">
              In 2019, UpTodd was born, accessible to parents in over 150
              countries. We passionately believe that every child, regardless of
              their background, possesses boundless potential. We're here to
              guide you on a scientific and emotional journey to unlock it, with
              a customised program made for your baby.
            </p>
            <p class="text-lg leading-relaxed mr-8">
              Join us on this captivating journey, where every child is truly
              special, and every family's dreams matter.
            </p>
          </div>

          <img src="downloadplay.png" />

          <ul class="space-y-4 text-lg list-disc mr-8">
            <li class="hover:text-pink-600 cursor-pointer">Research Hub</li>
            <li class="hover:text-pink-600 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
