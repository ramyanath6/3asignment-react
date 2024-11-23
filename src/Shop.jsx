// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import './index.css'

// const Shop =()=> {

//   const [colors, setColors]=useState(['Black Bellies','Pink Shoes','Brown Shoes','Traditional','Blue Shoes','Pink Shoes','Blue Bellies','Pink Bellies','Black Shoes','Black Bellies']);
// }

// const [var1, func1]=useState('');

// const searchColors=colors.filter((color)=>color.toLowerCase().includes(var1.toLowerCase()));
//   return (
//         <div className='container' style={{marginTop:'30px'}}>
//       <div className='row' style={{marginTop:'50px' , marginBottom:'50px'}}>
//         <h1  style={{color:'blue', marginLeft:'350px'}}>Search Color Avilability Here</h1>
//         <p style={{color:'blue'}}>“The fact is, sometimes it’s hard to walk in a single woman’s shoes. That’s why we need really special ones now and then to make the walk a little more fun.” – Carrie Bradshaw, SATC</p>
//       <input type="text" placeholder="Search.." value={searchTerm} onChange={(a)=>func1(a.target.value)} style={{marginBottom:'50px' ,color:'pink'}}/>
//         <div>{searchColors.map((color.index)=(
//           <div key={index}>{color}</div>       
//           )
//         )
//       }
//           </div> 
//           </div> 

//         <div className='col' >
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="1.jpeg" height={190} />
//             <ListGroup className="list-group-flush" >
//               <ListGroup.Item >Black Bellies</ListGroup.Item>
//               <ListGroup.Item > INR 900</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="2.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Pink Shoes</ListGroup.Item>
//               <ListGroup.Item > INR 1200</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="3.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Brown Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 800</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <br/>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="4.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Traditional</ListGroup.Item>
//               <ListGroup.Item >INR 1000</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div> <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="5.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Blue Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 1200</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="6.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Blue Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 1200</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div> <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="7.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Blue Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 1200</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="8.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Pink Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 2500</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div> <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="9.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Blue Bellies</ListGroup.Item>
//               <ListGroup.Item >INR 1500</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="10.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Pink Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 1500</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div> <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="11.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Blue Shoes</ListGroup.Item>
//               <ListGroup.Item >INR 2200</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="12.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Pink Bellies</ListGroup.Item>
//               <ListGroup.Item >INR 1000</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div> <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="13.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Black Shoes </ListGroup.Item>
//               <ListGroup.Item >INR 2000</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>
//         <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="14.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Black Bellies</ListGroup.Item>
//               <ListGroup.Item >INR 1000</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div> <div className='col'>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="15.jpeg" height={190} />
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item >Pink Bellies</ListGroup.Item>
//               <ListGroup.Item >INR 2000</ListGroup.Item>
//               <ListGroup.Item ><img src="heart.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="like.jpeg " alt="" style={{height:'30px', width:'30px'}}/>
//               <img src="share.jpg " alt="" style={{height:'30px', width:'30px'}}/>
//               </ListGroup.Item>            </ListGroup>
//           </Card>
//         </div>

//         </div>

//   )




// export default Shop;

















// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import './index.css';

// const Shop = () => {
//   const [colors, setColors] = useState([
//     'Black Bellies',
//     'Pink Shoes',
//     'Brown Shoes',
//     'Traditional',
//     'Blue Shoes',
//     'Pink Shoes',
//     'Blue Bellies',
//     'Pink Bellies',
//     'Black Shoes',
//     'Black Bellies',
//   ]);
//   const [var1, func1] = useState('');
//   const searchColors = colors.filter((color) =>
//     color.toLowerCase().includes(var1.toLowerCase())
//   );

//   return (
//     <div className="container" style={{ marginTop: '30px' }}>
//       <div className="row" style={{ marginTop: '50px', marginBottom: '50px' }}>
//         <h1 style={{ color: 'blue', marginLeft: '250px' }}>
//           Search Color Availability Here
//         </h1>
//         <p style={{ color: 'blue' }}>
//           “The fact is, sometimes it’s hard to walk in a single woman’s shoes.
//           That’s why we need really special ones now and then to make the walk a
//           little more fun.” – Carrie Bradshaw, SATC
//         </p>
//         <input type="text" placeholder="Search.." value={var1} onChange={(e) => func1(e.target.value)}
//           style={{ marginBottom: '50px', color: 'pink' }}/>
//         <div>
//           {searchColors.map((color, index) => (
//             <div key={index}>{color}</div>
//           ))}
//         </div>
      

//       <div className="col">
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="1.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>Black Bellies</ListGroup.Item>
//             <ListGroup.Item>INR 900</ListGroup.Item>
//             <ListGroup.Item>
//               <img src="heart.jpeg" alt="" style={{ height: '30px',width: '30px' }}/>
//               <img src="like.jpeg" alt="" style={{ height: '30px', width: '30px' }}/>
//               <img src="share.jpg" alt="" style={{ height: '30px', width: '30px' }}/>
//             </ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="2.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Pink Shoes</ListGroup.Item>
//             <ListGroup.Item > INR 1200</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>       
//                  </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="3.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Brown Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 800</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>         
//                </ListGroup>
//         </Card>
//       </div>
//       <br />
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="4.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Traditional</ListGroup.Item>
//             <ListGroup.Item >INR 1000</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div> <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="5.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Blue Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 1200</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="6.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Blue Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 1200</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div> <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="7.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Blue Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 1200</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="8.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Pink Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 2500</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div> <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="9.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Blue Bellies</ListGroup.Item>
//             <ListGroup.Item >INR 1500</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="10.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Pink Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 1500</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div> <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="11.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Blue Shoes</ListGroup.Item>
//             <ListGroup.Item >INR 2200</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="12.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Pink Bellies</ListGroup.Item>
//             <ListGroup.Item >INR 1000</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div> <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="13.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Black Shoes </ListGroup.Item>
//             <ListGroup.Item >INR 2000</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>           
//              </ListGroup>
//         </Card>
//       </div>
//       <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="14.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Black Bellies</ListGroup.Item>
//             <ListGroup.Item >INR 1000</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div> <div className='col'>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="15.jpeg" height={190} />
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item >Pink Bellies</ListGroup.Item>
//             <ListGroup.Item >INR 2000</ListGroup.Item>
//             <ListGroup.Item ><img src="heart.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="like.jpeg " alt="" style={{ height: '30px', width: '30px' }} />
//               <img src="share.jpg " alt="" style={{ height: '30px', width: '30px' }} />
//             </ListGroup.Item>            
//             </ListGroup>
//         </Card>
//       </div>  
//       </div>
//         </div>
//   );
// };

// export default Shop;





















// import React, { useState } from "react";
// import { Card, Form, Container, Row, Col } from "react-bootstrap";

// const Shop= () => {
//   // Card data with colors and content
//   const cardData = [
//     { id: 1, title: "Pink Bellies", color: "black", description: "INR 1200" , Image:"1.jpeg"},
//     { id: 2, title: "Card Two", color: "success", description: "This is card two" },
//     { id: 3, title: "Card Three", color: "danger", description: "This is card three" },
//     { id: 4, title: "Card Four", color: "warning", description: "This is card four" },
//   ];

//   const [searchText, setSearchText] = useState("");

//   // Filter cards based on the search input
//   const filteredCards = cardData.filter((card) =>
//     card.title.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Container className="mt-4">
//       <Form>
//         <Form.Group controlId="search">
//           <Form.Control
//             type="text"
//             placeholder="Search cards..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </Form.Group>
//       </Form>
//       <Row className="mt-4">
//         {filteredCards.map((card) => (
//           <Col key={card.id} sm={12} md={6} lg={4} className="mb-4">
//             <Card bg={card.color.toLowerCase()} text="white">
//               <Card.Body>
//                 <Card.Title>{card.title}</Card.Title>
//                 <Card.Text>{card.description}</Card.Text>
//                  <Card.Img variant="top" src="15.jpeg" height={190} />

//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Shop;











const cardData = [
    {
      id: 1,
      title: "Black Bellies",
      description: "INR 1200",
      color: "black",
      image: "1.jpeg",
    },
    {
      id: 2,
      title: "Pink Shoes",
      description: "INR 1500",
      color: "black",
      image: "2.jpeg",
    },
    {
      id: 3,
      title: "Brown Bellies",
      description: "INR 1600",
      color: "black",
      image: "3.jpeg",
    },
    {
        id: 4,
        title: "Traditional",
        description: "INR 2000",
        color: "black",
        image: "4.jpeg",
      },
      {
        id: 5,
        title: "Blue Shoes",
        description: "INR 1000",
        color: "black",
        image: "5.jpeg",
      },
      {
        id: 6,
        title: "Blue Shoes",
        description: "INR 1200",
        color: "black",
        image: "6.jpeg",
      },
      {
        id: 7,
        title: "Pink and Blue",
        description: "INR 2000",
        color: "black",
        image: "7.jpeg",
      },
      {
        id: 8,
        title: "Pink Shoes",
        description: "INR 1800",
        color: "black",
        image: "8.jpeg",
      },
      {
        id: 9,
        title: "Blue Bellies",
        description: "INR 1000",
        color: "black",
        image: "9.jpeg",
      },
      {
        id: 10,
        title: "Pink Shoes",
        description: "INR 1800",
        color: "black",
        image: "10.jpeg",
      },
      {
        id: 11,
        title: "Blue and White",
        description: "INR 1700",
        color: "black",
        image: "11.jpeg",
      },
      {
        id: 12,
        title: "Blue Bellies",
        description: "INR 2000",
        color: "black",
        image: "12.jpeg",
      },
      {
        id: 13,
        title: "Black Multicolor",
        description: "INR 2500",
        color: "black",
        image: "13.jpeg",
      },
      {
        id: 14,
        title: "Black Bellies",
        description: "INR 1400",
        color: "black",
        image: "14.jpeg",
      },
      {
        id: 15,
        title: "Peach Bellies",
        description: "INR 3000",
        color: "black",
        image: "15.jpeg",
      },
      {
        id: 16,
        title: "Sky Blue Bellies",
        description: "INR 1500",
        color: "black",
        image: "16.jpeg",
      },
      {
        id: 17,
        title: "Purple Bellies",
        description: "INR 3500",
        color: "black",
        image: "17.jpeg",
      },
      {
        id: 18,
        title: "Cream Multicolor",
        description: "INR 1000",
        color: "black",
        image: "18.jpeg",
      },
      {
        id: 19,
        title: "Brown Multicolor",
        description: "INR 1000",
        color: "black",
        image: "19.jpeg",
      },
      {
        id: 20,
        title: "Pink belt",
        description: "INR 4000",
        color: "black",
        image: "20.jpeg",
      },
      {
        id: 21,
        title: "Gold bellies",
        description: "INR 4000",
        color: "black",
        image: "21.jpeg",
      },
      {
        id: 22,
        title: "Gold Bellies",
        description: "INR 2000",
        color: "black",
        image: "22.jpeg",
      },
      {
        id: 23,
        title: "Traditional",
        description: "INR 1500",
        color: "black",
        image: "23.jpeg",
      },
      {
        id: 24,
        title: "Traditional Maroon",
        description: "INR 2500",
        color: "black",
        image: "24.jpeg",
      },
      {
        id: 25,
        title: "Sea Blue Shoes",
        description: "INR 4000",
        color: "black",
        image: "25.jpeg",
      },
      {
        id: 26,
        title: "White Pink Floral",
        description: "INR 1800",
        color: "black",
        image: "26.jpeg",
      },
      {
        id: 27,
        title: "Red Bellies",
        description: "INR 1000",
        color: "black",
        image: "27.jpeg",
      },
      {
        id: 28,
        title: "Purple Belt",
        description: "INR 4500",
        color: "black",
        image: "28.jpeg",
      },
  
    
  ];
  
  
  import React, { useState } from "react";
  import { Card, Button, Form } from "react-bootstrap";
  
  const Shop = () => {
    const [searchText, setSearchText] = useState("");
    const [cards, setCards] = useState(cardData);
  
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
      <div className="container mt-4">
        <Form.Control type="text" placeholder="Search Cards" className="mb-4" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
  
        <div className="row">
          {filteredCards.map((card) => (
            <div className="col-md-3 mb-3" key={card.id}>
              <Card bg={card.color} text="white" className="h-100" style={{height:'250px',width:'250px'}}>
              <Card.Img variant="top" src={card.image} alt={card.title}  style={{height:'250px',width:'250px'}}/>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button variant="light">View More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shop;