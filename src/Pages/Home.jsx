import homeImg from '../assets/home.jpg'
import sec1 from '../assets/sec0.jpg'
import sec2 from '../assets/sec1.jpg'
import camp1 from '../assets/camp1.jpg'
import camp2 from '../assets/camp2.jpg'
import camp3 from '../assets/camp3.jpg'
import camp4 from '../assets/camp4.jpg'
import quote from '../assets/quote.png'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addReviewAPI, getAllReviewsAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

const Home = () => {

  const [show, setShow] = useState(false);
  const [reviewDetails, setReviewDetails] = useState({ name: "", program: "", feedback: "" })
  const [allReviews, setAllReviews] = useState([])
  const [addResponse, setAddResponse] = useState({})

  const handleClose = () => {
    setReviewDetails({ name: "", program: "", feedback: "" })
    setShow(false);
  }
  const handleShow = () => setShow(true);



  const addReview = async () => {
    const { name, program, feedback } = reviewDetails

    if (name && program && feedback) {
      try {
        const result = await addReviewAPI(reviewDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Review Added")
          setReviewDetails({ name: "", program: "", feedback: "" })
          handleClose()
          setAddResponse(result)
          getAllReviews()
        }
        if (result.status == 406) {
          toast.error(result.response.data)
          setReviewDetails({ name: '', program: '', feedback: '' })
        }

      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.error("Enter all fields")
    }
  }

  useEffect(() => {
    getAllReviews()
  }, [addResponse])


  const getAllReviews = async () => {
    try {
      const result = await getAllReviewsAPI()
      console.log(result);
      if (result.status == 200) {
        setAllReviews(result.data)
      }

    }
    catch (err) {
      console.log(err);

    }
  }
  return (
    <>
      <div>

        {/* First Section */}
        <div className='container-fluid'>
          <div className='row p-sm-5 d-flex justify-content-between align-items-end home-banner' style={{ backgroundImage: `url(${homeImg})`, height: '640px', backgroundSize: 'cover', color: 'white', backgroundPosition: 'center' }}>
            <div className="col-md-6">
              <h5 className='mb-3'><i className="fa-solid fa-building-columns"></i> Knowledge meets innovation</h5>
              <h1 className='main-head' style={{ fontSize: '58px' }}>Where Ambition Meets Mastery</h1>
              <Link to={'/courses'}><button className='btn text-light py-2 px-3 rounded-5 fw-bold shadow contents' style={{ backgroundColor: 'rgb(65, 144, 115)' }}>View Our Programs <i className='fa-solid fa-arrow-right'></i></button></Link>
            </div>
            <div className="col-md-3">
              <Link to={'/admission'}><button className='btn text-light py-2 px-3 rounded-5 fw-bold shadow contents' style={{ backgroundColor: 'rgb(65, 144, 115)' }}>Apply for Admission <i className='fa-solid fa-arrow-right'></i></button></Link>
              <hr />
            </div>

          </div>
        </div> <br />

        {/* Second Section */}
        <div className="container-fluid">
          <div className='row d-flex justify-content-center align-items-center gap-2 mt-5 pt-sm-5'>
            <div className="col-md-5 d-flex gap-4 justify-content-center">
              <img src={sec1} alt="" style={{ width: '45%' }} className='rounded-5 shadow' />
              <img src={sec2} alt="" style={{ width: '45%' }} className='rounded-5 shadow' />
            </div>
            <div className="col-md-5 sec-section">
              <h5 className='mb-3 mt-3 mt-md-0 contents' style={{ color: 'rgb(65, 144, 115)' }}><i className="fa-solid fa-building-columns"></i> Knowledge meets innovation</h5>
              <h1 className='fw-bold headings'>About University</h1>
              <p className='text-secondary contents2' style={{ textAlign: 'justify' }}>Raynott University is a modern institution built on the idea that education should be practical, industry aligned, and globally relevant. Our programs are designed to equip students with real-world skills, hands-on experience, and strong professional foundations that prepare them for the challenges of a rapidly evolving world.</p>
              <p className='text-secondary contents2' style={{ textAlign: 'justify' }}>We combine academic excellence with innovation offering advanced labs, experienced faculty, and a collaborative learning culture that encourages creativity, research, and personal growth. At Raynott University, students don’t just study; they build careers, explore new ideas, and become part of a community focused on impact and progress.</p>
              <div className='d-flex gap-5'>
                <Link to={'/about'}>
                  <button className='btn rounded-5 fw-bold p-md-3 shadow contents2' style={{ border: 'solid 2px rgb(65, 144, 115)', color: 'rgb(65, 144, 115)' }}> <i className="fa-solid fa-people-roof"></i> University Mission Statement</button></Link>
                <Link to={'/about'}><button className='btn rounded-5 fw-bold p-md-3 shadow contents2' style={{ border: 'solid 2px rgb(65, 144, 115)', color: 'rgb(65, 144, 115)' }}> <i className="fa-solid fa-school"></i> University Vision Achievement</button></Link>
              </div>
              <Link to={'/courses'}><button className='btn text-light fw-bold py-2 px-3 rounded-5 mt-4 shadow contents2' style={{ backgroundColor: 'rgb(65, 144, 115)' }}>View Our Program <i className='fa-solid fa-arrow-right'></i></button></Link>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className='d-flex justify-content-center container-fluid mt-5 pt-sm-5'>
          <div className='row d-flex justify-content-center p-4 third-section rounded-5 shadow' style={{ backgroundColor: 'rgb(65, 144, 115)', width: '45%' }}>
            <div className='col-5'>
              <div className='text-light mb-md-4'>
                <h1 className='headings'>15,000+</h1>
                <h6 className='contents'>Students</h6>
              </div>
              <div className='text-light'>
                <h1 className='headings'>100+</h1>
                <h6 className='contents'>Programs</h6>
              </div>
            </div>
            <div className='col-2 displayNone'><div style={{ width: '1px', height: '160px', backgroundColor: 'rgb(255, 255, 255,0.2)' }}></div></div>
            <div className="col-3">
              <div className='text-light mb-md-4'>
                <h1 className='headings'>500+</h1>
                <h6 className='contents'>Faculty</h6>
              </div>
              <div className='text-light'>
                <h1 className='headings'>50+</h1>
                <h6 className='contents'>Countries</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Academics Section */}
        <div>
          <h1 className='text-center mt-5 pt-sm-5 mb-4 fw-bold headings'>Academics & Programs</h1>
          <div className='d-flex justify-content-center'>
            <div className='row rounded-5 shadow' style={{ backgroundColor: 'whitesmoke', width: '85%' }}>
              <div className="col-md-4 py-5 px-5">
                <h2 className='text-center headings'>Undergraduate</h2>
                <div className='d-flex flex-column gap-2'>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>American Literature</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Creative Writing</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Astrophysics</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Bio Engineering</button>
                </div>
              </div>
              <div className="col-md-4 py-5 px-5" style={{ backgroundColor: 'rgb(65, 144, 115)' }}>
                <h2 className='text-center text-light headings'>Graduate</h2>
                <div className='d-flex flex-column gap-2'>
                  <button className='btn rounded-5 p-md-2 fs-5 text-light contents' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>American Literature</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Creative Writing</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Applied Health</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Minor in English</button>
                </div>
              </div>
              <div className="col-md-4 py-5 px-5">
                <h2 className='text-center headings'>Lifelong Learning</h2>
                <div className='d-flex flex-column gap-2'>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Bachelor of Arts (B.A)</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Master of Arts (M.A)</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Doctor of Philosophy</button>
                  <button className='btn rounded-5 p-md-2 fs-5 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Health and Wellness</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Life Section */}
        <div className='py-sm-5'>
          <div className='p-5 text-center d-flex flex-column align-items-center justify-content-center mt-5' style={{ backgroundColor: 'rgb(65, 144, 115)' }}>
            <h1 className=' text-light fw-bold headings' style={{ fontSize: '50px' }}>Campus Life</h1>
            <h4 className='contents' style={{ color: 'rgb(255,255,255,0.7)' }}>Building a vibrant community of creative and accomplished people from around the world</h4>
            <div className='text-start my-3 contents2'>
              <p className='text-light'><i className='fa-solid fa-angle-right'></i>Modern laboratories and research centers</p>
              <p className='text-light'><i className='fa-solid fa-angle-right'></i>Sports complex with Olympic-size pool</p>
              <p className='text-light'><i className='fa-solid fa-angle-right'></i>24/7 library with digital resources</p>
              <p className='text-light'><i className='fa-solid fa-angle-right'></i>Student clubs and organizations</p>
              <p className='text-light'><i className='fa-solid fa-angle-right'></i>International exchange programs</p>
              <p className='text-light'><i className='fa-solid fa-angle-right'></i>Career counseling and placement support</p>
            </div>
            <div className='row d-flex justify-content-center gap-2'>
              <div className="col-md-2 col-5">
                <img src={camp2} alt="" className='w-100 rounded-5 shadow' />
              </div>
              <div className="col-md-3 col-5">
                <img src={camp3} alt="" className='w-100 rounded-5 shadow' />
              </div>
              <div className="col-md-3 col-5">
                <img src={camp4} alt="" className='w-100 rounded-5 shadow' />
              </div>
              <div className="col-md-2 col-5">
                <img src={camp1} alt="" className='w-100 rounded-5 shadow' />
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Section */}
        <div className='mt-md-5 p-5'>
          <h1 className='text-center fw-bold headings' style={{color:'rgb(65, 144, 115)'}}>Students Stories</h1>
          <p className='text-secondary text-center m-0 contents'>Hear from our incredible community</p>
          <div className='mt-md-5 mt-3 d-flex flex-wrap gap-3 justify-content-around align-items-center'>
            {allReviews.length > 0 ?
              allReviews.map((review, index) => (
                <Card key={index} className='border-0 rounded-5 shadow' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className='contents' style={{ color: 'rgb(65, 144, 115)' }}>★ ★ ★ ★ ★</Card.Title>
                    <Card.Text className='contents'>
                      {review.feedback}
                    </Card.Text>
                    <div className=' row d-flex justify-content-between align-items-center'>
                      <div className='col-8'>
                        <span className='contents'>{review.name}</span> <br />
                        <span className='contents'>{review.program}</span>
                      </div>
                      <div className='col-4'>
                        <img src={quote} alt="" className='w-100' />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
              :
              <h1 className='text-secondary'>No Feedbacks found</h1>}
          </div>

          <div className=' d-flex justify-content-center'>
            <button onClick={handleShow} className='btn mt-md-5 mt-4 fw-bold text-light px-md-4 rounded-5 contents' style={{ backgroundColor: 'rgb(65, 144, 115)' }}>Add Feedback</button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className='contents'>Add Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input value={reviewDetails.name} onChange={(e) => setReviewDetails({ ...reviewDetails, name: e.target.value })} type="text" className='form-control mb-3 contents' placeholder='Name' />
                <input value={reviewDetails.program} onChange={(e) => setReviewDetails({ ...reviewDetails, program: e.target.value })} type="text" className='form-control mb-3 contents' placeholder='Program' />
                <input value={reviewDetails.feedback} onChange={(e) => setReviewDetails({ ...reviewDetails, feedback: e.target.value })} type="text" className='form-control mb-3 contents' placeholder='Feedback' />
              </Modal.Body>
              <Modal.Footer>
                <Button className='contents' variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button className='border-0 px-5 contents' onClick={addReview} style={{ backgroundColor: 'rgb(65, 144, 115)' }}>Add Feedback</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home