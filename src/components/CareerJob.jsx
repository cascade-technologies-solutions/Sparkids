import React, { useState , useRef } from "react";
import "../styles/CareerJob.css";

const jobData = [
    {
      id: 1,
      type: "Abacus Instructor",
      category: "Academic",
      locations: ["Mid-Level", "Chennai", "Madurai"],
      responsibilities: "Conduct Abacus classes, evaluate student progress, and engage with parents regarding student development.",
      requirements: "Strong mathematical skills, prior teaching experience, and passion for working with children.",
      details: {
        primaryResponsibility:
          "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases and APIs using technologies such as Node.js, Python, Ruby, or Java.Designing, implementing, and managing databases (SQL or NoSQL) to ensure data integrity and efficient retrieval.Using version",
        jobSpecification: [
          "Proficiency in front-end technologies HTML, CSS, JavaScript frameworks like React or Angular.",
          "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
          "Experience in designing and managing databases (SQL and NoSQL)",
          "Proficiency in schema design and query",
        ],
        employmentType: "Full-time",
        workPlaceType: "Hybrid",
        salary: "Commensurate with experience and skills",
        experienceRequired: "Minimum 3 Years",
        location: "Chennai, Madurai, Coimbatore",
      },
    },
    {
      id: 2,
      type: "Vedic Math Trainer",
      category: "Academic",
      locations: ["Mid-Level", "Chennai", "Madurai"],
      responsibilities:
        "Teach students techniques of Vedic Mathematics to improve speed and accuracy in calculations.",
      requirements: "SExpertise in Vedic Math concepts, teaching experience preferred.",
      details: {
        primaryResponsibility:
          "Teaching advanced mathematical concepts and improving...",
        jobSpecification: [
          "Strong command over Vedic Mathematics techniques",
          "Proven teaching experience",
        ],
        employmentType: "Full-time",
        workPlaceType: "On-site",
        salary: "Competitive",
        experienceRequired: "Minimum 2 Years",
        location: "Chennai, Madurai",
      },
    },
    {
        id: 3,
        type: "English Communication Trainer",
        category: "Academic",
      locations: ["Mid-Level", "Chennai", "Madurai"],
      responsibilities:
        "Teach students techniques of Vedic Mathematics to improve speed and accuracy in calculations.",
      requirements: "SExpertise in Vedic Math concepts, teaching experience preferred.",
      details: {
        primaryResponsibility:
          "Teaching advanced mathematical concepts and improving...",
        jobSpecification: [
          "Strong command over Vedic Mathematics techniques",
          "Proven teaching experience",
        ],
        employmentType: "Full-time",
        workPlaceType: "On-site",
        salary: "Competitive",
        experienceRequired: "Minimum 2 Years",
        location: "Chennai, Madurai",
      },
    },
    {
        id: 4,
        type: "Rubik’s Cube Trainer",
        category: "Academic",
      locations: ["Mid-Level", "Chennai", "Madurai"],
      responsibilities:
        "Teach students techniques of Vedic Mathematics to improve speed and accuracy in calculations.",
      requirements: "SExpertise in Vedic Math concepts, teaching experience preferred.",
      details: {
        primaryResponsibility:
          "Teaching advanced mathematical concepts and improving...",
        jobSpecification: [
          "Strong command over Vedic Mathematics techniques",
          "Proven teaching experience",
        ],
        employmentType: "Full-time",
        workPlaceType: "On-site",
        salary: "Competitive",
        experienceRequired: "Minimum 2 Years",
        location: "Chennai, Madurai",
      },
    },
  ];
  
  const filters = ["All positions", "Academic", "Administrative", "Operational"];
  
  function CareerJob() {
    const [selectedJob, setSelectedJob] = useState(jobData[0]);
    const [selectedFilter, setSelectedFilter] = useState("All positions");
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const jobDetailsRef = useRef(null);

    const filteredJobs =
      selectedFilter === "All positions"
        ? jobData
        : jobData.filter((job) => job.category === selectedFilter);
    
        const handleJobClick = (job) => {
          setSelectedJob(job);
          if (jobDetailsRef.current) {
            jobDetailsRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };

        const handleApplyNow = () => {
    setShowApplicationForm(true);
  };

    return (
      <div className="job-container">
        {/* Top Filter Section */}
        <div className="job-filter">
          <h1>Current Job Openings</h1>
          <div className="filter-buttons">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`filter-button ${
                  selectedFilter === filter ? "active-filter" : ""
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
  
        <div className="job-content-section">
          {/* Left Section: Job Listings */}
          <div className="job-listings">
            <div className="job-list">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`job-item ${
                    selectedJob?.id === job.id ? "active" : ""
                  }`}
                  onClick={() => handleJobClick(job)}
                    // setSelectedJob(job)}
                >
                  <h3>{job.type}</h3>
                  <div className="job-tags">
                    {job.locations.map((location, index) => (
                      <span key={index} className="job-tag">
                        {location}
                      </span>
                    ))}
                  </div>
                  <p className="job-content"><span >Responsibilities:</span>{job.responsibilities}</p>
                  <p className="job-content"><span>Requirements:</span>{job.requirements}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Section: Job Details */}
          <div className="job-details" ref={jobDetailsRef}>
          {showApplicationForm ? (
            <div className="job-application-form">
              <h3>Job Application</h3>
              <p>Tell us more about you so we can get back to you with more info.</p>
              <form>
                <div>
                  <label>Full Name</label>
                  <input type="text"  />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email"/>
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Current CTC</label>
                  <input type="text"  />
                </div>
                <div>
                  <label>Expected CTC</label>
                  <input type="text"  />
                </div>
                <div>
                  <label>Notice Period</label>
                  <input type="text"  />
                </div>
                <div>
                  <label>Upload your resume</label>
                  <input type="file" />
                </div>
                <div>
                  <label>Submit your portfolio link</label>
                  <input type="text" />
                </div>
                <button type="submit" className="apply-btn">
                  Apply Now
                </button>
              </form>
            </div>
          ) : selectedJob ? (
            <>
              <h2>{selectedJob.type}</h2>
              <div className="job-description">
                <h3>Primary Responsibility:</h3>
                <p>{selectedJob.details.primaryResponsibility}</p>

                <h3>Job Specification:</h3>
                <ul>
                  {selectedJob.details.jobSpecification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>

                <h3>Employment Type:</h3>
                <p>{selectedJob.details.employmentType}</p>

                <h3>Work Place Type:</h3>
                <p>{selectedJob.details.workPlaceType}</p>

                <h3>Salary:</h3>
                <p>{selectedJob.details.salary}</p>

                <h3>Experience Required:</h3>
                <p>{selectedJob.details.experienceRequired}</p>

                <h3>Job Location:</h3>
                <p>{selectedJob.details.location}</p>

                <button
                  className="apply-btn"
                  onClick={handleApplyNow}
                >
                  Apply Now
                </button>
              </div>
            </>
          ) : (
            <p>Select a job to view details</p>
          )}
        </div>
      </div>
      </div>
    );
  }

export default CareerJob;
