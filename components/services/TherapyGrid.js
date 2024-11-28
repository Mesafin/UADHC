
export default function TherapyGrid() {
    return (
        <div className="container mx-auto -my-1 pt-5 pb-10">
            
        
      <div className=" text-white p-8">
        <h2 className="text-3xl font-bold text-center mb-8 ">
          We offer a variety of therapies, including:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Physical Therapies */}
          <div>
            <h3 className="text-2xl font-bold my-4 lg:my-8">Physical Therapies:</h3>
            <p className="text-lg">
              Our expert physical therapists help participants manage physical disabilities, improve mobility, and increase strength. We offer:
            </p>
            <ul className="list-disc list-inside mt-4 lg:mt-6 space-y-1">
              <li>Gait and balance training</li>
              <li>Strength training</li>
              <li>Fitness and wellness education</li>
              <li>Group exercise classes</li>
              <li>Aquatic therapy</li>
              <li>Pain management techniques</li>
            </ul>
          </div>
  
          {/* Occupational Therapies */}
          <div>
            <h3 className="text-2xl font-bold my-4 lg:my-8">Occupational Therapies:</h3>
            <p className="text-lg">
              Our certified occupational therapists assist participants in performing daily living activities and preventing injuries. We provide:
            </p>
            <ul className="list-disc list-inside mt-4 lg:mt-6 space-y-1">
              <li>Activities of daily living (ADL) training</li>
              <li>Adaptive equipment training</li>
              <li>Fine motor skills exercises</li>
              <li>Sensory integeration therapy</li>
              <li>Home modifications and saftey assesements</li>
              <li>Group occupational therapy sessions</li>
            </ul>
          </div>
  
          {/* Speech Therapies */}
          <div>
            <h3 className="text-2xl font-bold my-4 lg:my-8">Speech Therapies:</h3>
            <p className="text-lg">
              Our speech-language pathologists address communication and swallowing difficulties. We offer:
            </p>
            <ul className="list-disc list-inside mt-4 lg:mt-6 space-y-1">
              <li>Cognitive-communication therapy</li>
              <li>Aphasia therapy</li>
              <li>Articulation therapy</li>
              <li>Voice therapy</li>
              <li>Swallowing therapy</li>
              <li>Augmentative and alternative communication (AAC)</li>
              <li>Group speech therapy sessions</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
  