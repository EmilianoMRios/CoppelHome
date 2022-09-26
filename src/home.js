import './home.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => (
    <>
    <div>
        <h3 className='text-center m-3'>Hogar y muebles</h3>
    <CardGroup className='group-card-home'>
      <Card className='hogar-card'>
       <a href="/hogar/muebles">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Muebles.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer p-0'>
          <small>Muebles</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card'>
      <a href="/hogar/colchones">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Colchones.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer p-0'>
          <small>Colchones</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card'>
      <a href="/hogar/blancos-hogar">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Blancos.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer p-0'>
          <small>Blancos para el hogar</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card'>
      <a href="/hogar/cuarto-de-bano">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Bano.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer p-0'>
          <small>Baño</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card'>
      <a href="/hogar/decoracion-hogar">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Decoracion.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer p-0'>
          <small>Decoración</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card'>
      <a href="/hogar/dia-de-muertos">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Halloween.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer p-0'>
          <small>Halloween</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card'>
      <a href="/hogar/iluminacion">
            <img className='img-card' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Iluminacion.jpg" alt=''></img>
       </a>
      <Card.Footer className='hogar-card-footer'>
          <small>Iluminación</small>
        </Card.Footer>
      </Card>
      <Card className='hogar-card text-center card-blue'>
       <b>Ver todas las categorias</b>
      </Card>
    </CardGroup>
    </div>
    <div>
        <Container className='conteiner-f'>
            <Row>
                <Col lg={8}>
                  <Carousel>
                    <Carousel.Item>
                    <a href="/hogar/muebles/recamara">
                    <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Desktop/hogar-muebles-desktop-sept1.jpg"/>
                    <img className='carousel-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Mobile/hogar-muebles-mobile-sept1.jpg" alt=''></img>
                    </picture></a>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=24&searchTerm=RB2236-EPMTPE-DECORACION-HALLOWEEN2022">
                    <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Desktop/Slider-primer-nivel-desktop.jpg"/>
                    <img className='carousel-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Mobile/Slider-primer-nivel-mobile.jpg" alt=''></img>
                    </picture></a>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=24&searchTerm=RB-2022-HOGARYRECAMARA-RA">
                    <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Desktop/hogar-muebles-desktop-sept3.jpg"/>
                    <img className='carousel-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Mobile/hogar-muebles-mobile-sept3.jpg" alt=''></img>
                    </picture></a>
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col lg={4}>
                  <Row>
                    <Col sm={12}>
                    <a href="/hogar/muebles/muebles-para-cocinas/cocina-integral">
                    <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Desktop/Bloques/banner1-desktop.jpg"/>
                    <img className='baner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Mobile/Banner1-mobile.jpg" alt=''></img>
                    </picture></a>
                    </Col>
                    <Col sm={12} className='img-row'>
                    <a href="/hogar/colchones">
                    <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Desktop/Bloques/banner2-desktop.jpg"/>
                    <img className='baner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/sliders/Mobile/Banner2-mobile.jpg" alt=''></img>
                    </picture></a>
                    </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
    </div>
    <div>
    <h4 className='conteiner-f'>Duerme y descansa cómodamente</h4>
        <Carousel style={{ width: '78rem' }}>
            <Carousel.Item>
                <CardGroup>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4544293-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Loveseat Logan Contemporáneo</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$7,899</span>
                      <span className='price'>$5,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3534183-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Colchón Individual Sealy Yankee</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$1,299</span>
                      <span className='price'>$979</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3544223-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Comedor Melissa con 4 Sillas</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$229</span>
                      <span className='price'>$159</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4032913-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Buró Jordan Blanco</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$3,299</span>
                      <span className='price'>$2,599</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3689213-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Comedor Miguel con 4 Sillas</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'></span>
                      <span className='price'>$10,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3622123-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Silla de Oficina Blokhus Negra</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$2,499</span>
                      <span className='price'>$1,999</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4540543-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Sala Esquinera Contemporánea Michelle 5 Piezas</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$6,799</span>
                      <span className='price'>$5,449</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4550933-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Almohada Sognare Fussion King Size Suave</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$10,899</span>
                      <span className='price'>$8,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4075723-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Sala Esquinera Rossela Contemporánea</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$7,899</span>
                      <span className='price'>$5,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3664813-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Pizarrón Baby Colors</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$1,299</span>
                      <span className='price'>$979</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
        </div>
    <div>
    <Container className='conteiner-f lg'>
    <h4>Duerme y descansa cómodamente</h4>
      <Row>
        <Col xs={6}>
           <a href="/hogar/colchones/colchones-hogar">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Colchones-y-blancos.jpg"/>
              <img className='conteiner-img-lg' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Colchones-y-blancos.jpg" alt=''></img>
            </picture></a>
            <p>Colchones</p>
        </Col>
        <Col>
        <a href="/hogar/colchones/juegos-box-colchones">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Juego-de-box.jpg"/>
              <img className='conteiner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Juego-de-box.jpg" alt=''></img>
            </picture></a>
            <p>Juego de colchón y box</p>
        </Col>
        <Col>
        <a href="/hogar/blancos-hogar">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Blancos-hogar.jpg"/>
              <img className='conteiner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Blancos-hogar.jpg" alt=''></img>
            </picture></a>
            <p>Blancos para el hogar</p>
        </Col>
      </Row>
    </Container>
    </div>
    <div>
      <Container className='conteiner-marcas'>
        <h4>Marcas de ensueño</h4>
        <Row className='row-marcas'>
          <Col>
           <a href="/hogar/hogar/colchones?facetName_1=RESTONIC&fromPage=catalogEntryList&beginIndex=0&facet_1=ads_f11001_ntk_cs%253A%2522RESTONIC%2522&pageView=grid">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-1.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/hogar/hogar/colchones?facetName_1=SPRING+AIR&fromPage=catalogEntryList&beginIndex=0&facet_1=ads_f11001_ntk_cs%253A%2522SPRING%2BAIR%2522&pageView=grid">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-2.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/colchones-america">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/junio/hogar/marcas%203.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/mobi">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-4.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/goldream">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-5.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/hogar/hogar/colchones?facetName_1=SEALY&fromPage=catalogEntryList&beginIndex=0&facet_1=ads_f11001_ntk_cs%253A%2522SEALY%2522&pageView=grid">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-6.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=24&searchTerm=sognare&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-7.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/starhaus">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-8.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/comfort-dreams">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-9-2.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="/SearchDisplay?categoryId=13004&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&pageSize=18&searchTerm=singer">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-10.jpg" alt=''></img>
          </a>
          </Col>
          <Col>
          <a href="mas-simple">
            <img className='img-marcas' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Marcas/marca-11.jpg" alt=''></img>
          </a>
          </Col>
        </Row>
      </Container>
    </div>
    <div>
    <Container className='conteiner-f lg'>
    <h4>Cada espacio es único</h4>
      <Row>
        <Col>
           <a href="/hogar/muebles/comedores">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Comedor.jpg"/>
              <img className='conteiner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Comedor.jpg" alt=''></img>
            </picture></a>
            <p>Comedor</p>
        </Col>
        <Col>
        <a href="/hogar/muebles/muebles-para-cocinas">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Cocina.jpg"/>
              <img className='conteiner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Cocina.jpg" alt=''></img>
            </picture></a>
            <p>Cocina</p>
        </Col>
        <Col xs={6}>
        <a href="/hogar/muebles/salas">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Sala.jpg"/>
              <img className='conteiner-img-lg' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Sala.jpg" alt=''></img>
            </picture></a>
            <p>Sala</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
        <a href="/hogar/muebles/recamara">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Recamara.jpg"/>
              <img className='conteiner-img-lg' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Recamara.jpg" alt=''></img>
            </picture></a>
            <p>Recámara</p>
        </Col>
        <Col>
        <a href="/hogar/muebles/oficinas">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Oficina-y-estudio.jpg"/>
              <img className='conteiner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Oficina-y-estudio.jpg" alt=''></img>
            </picture></a>
            <p>Oficina y estudio</p>
        </Col>
        <Col>
        <a href="/hogar/patio-y-jardin-hogar">
            <picture><source media="(min-width: 768px)" srcset="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Desktop/Patio-y-jardin.jpg"/>
              <img className='conteiner-img' src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/septiembre/hogar/Mobile/Patio-y-jardin.jpg" alt=''></img>
            </picture></a>
            <p>Patio y Jardín</p>
        </Col>
      </Row>
    </Container>
        </div>
        <div>
        <h4 className='conteiner-f'>Te encantarán</h4>
        <Carousel style={{ width: '78rem' }}>
            <Carousel.Item>
                <CardGroup>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3689213-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Comedor Miguel con 4 Sillas</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$7,899</span>
                      <span className='price'>$5,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4673163-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Almohada Sognare Fussion Queen Firme</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$1,299</span>
                      <span className='price'>$979</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3619683-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Taburete Plegable Belmont Andrés</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$229</span>
                      <span className='price'>$159</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3637743-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Cómoda Helena Gris 81.5 cm</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$3,299</span>
                      <span className='price'>$2,599</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4075723-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Sala Esquinera Rossela Contemporánea</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'></span>
                      <span className='price'>$10,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3671513-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Escritorio Andromeda Negro</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$2,499</span>
                      <span className='price'>$1,999</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3654833-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Comedor Keyla con 4 Sillas</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$6,799</span>
                      <span className='price'>$5,449</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3723823-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Colchon Matrimonial Goldream Sense</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$10,899</span>
                      <span className='price'>$8,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/3689213-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Comedor Miguel con 4 Sillas</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$7,899</span>
                      <span className='price'>$5,699</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="carrousel-card">
                <Card.Img variant="top" src="https://cdn1.coppel.com/images/catalog/pm/4673163-1.jpg?iresize=width:300,height:240" />
                <Card.Body className='text-center'>
                    <Card.Title>Almohada Sognare Fussion Queen Firme</Card.Title>
                    <Card.Text>
                      <p>Precio contado:</p>
                      <span className='old-price'>$1,299</span>
                      <span className='price'>$979</span>
                    </Card.Text>
                </Card.Body>
                </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div><div>
            <Card style={{ width: '73rem' }} className="card">
                <Card.Body>
                    <Card.Title>Inspiración para transformar tu hogar</Card.Title>
                    <Card.Text>
                        <p>
                            Dale un giro a la decoración de tu hogar con los mejores muebles de madera que te aportarán un toque de calidez.
                            Coppel tiene una gran variedad de muebles con diseños originales para que mejores tu hogar.
                        </p>
                        <p>
                            Remodela tu sala con sofás, sofás cama, sillones reclinables, sillones, centros de entretenimiento, tapetes, cortinas, muebles organizadores, percheros ¡y más!
                            Encuentra todo para armar una sala clásica o una sala moderna con el sello personal que te caracteriza.
                        </p>
                        <p>
                            Ponle sazón a tu hogar con un bonito comedor moderno y elegante, y equípate a la hora de cocinar con una cocina integral.
                        </p>
                        <p>
                            ¡Crea tu recámara ideal! Elige el mejor soporte para tu descanso con almohadas, camas y bases, juegos de box y colchones, y ponle tu estilo con juegos de blancos, fundas para almohadas, edredones, colchas y cobertores. Encuentra también todo para el cuarto de tus hijos con los detalles más divertidos y sus personajes favoritos.
                            Y para el cuarto del bebé, tenemos las mejores cunas de madera y otros muebles que te encantarán.
                        </p>
                        <p>
                            Encontrarás todas las marcas de colchones: Spring Air, colchones América, Sealy, Restonic, Goldream, Wendy, entre otros.
                        </p>
                        <p>
                            En Coppel.com contamos con la mejor herramienta de búsqueda para ayudarte a encontrar el colchón que necesitas, ordena los productos por tamaño, marca y tecnología para que te lleves el que mejor se adapte a tus necesidades.
                        </p>
                        <p>
                            ¡El jardín es parte fundamental de tu hogar! Decóralo con un muro verde artificial, hamacas, sala para jardín, columpios y más. Si buscas que el exterior de tu hogar sea un espacio que vaya con tu personalidad, las nuevas tendencias y colores en muebles para jardín son lo que necesitas. Nosotros te ayudamos a darle un toque único y personalizado con la gran variedad de muebles para jardín que en Coppel tenemos para ti.
                        </p>
                        <p>
                            Para este regreso a clases, equípate con todo lo necesario: laptops, impresoras, escritorios, sillas de oficina, audífonos, mochilas, zapatos escolares y mucho más.
                        </p>
                        <p>
                            Trabaja o estudia en tu propia oficina y equípala con artículos como: escritorios, lámparas, libreros y sillas de oficina. Coppel tiene las últimas tendencias en muebles de madera que te encantarán.
                        </p>
                        <p>
                            Sabemos que el conservar tus cosas en su lugar es de suma importancia; por eso, para que mantengas todo ordenado y siempre a tu alcance, te invitamos a conocer los productos de la marca +Simple, que definitivamente te ayudarán a mantenerte organizado.
                        </p>
                        <p>
                            Utiliza tu crédito y estrena hoy mismo. Si todavía no tienes tu Crédito Coppel, solicítalo en línea; ¡es fácil, rápido y gratis!
                        </p>
                        <p>
                            ¡Haz tu vida más fácil con Coppel!
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div></>
  );

  export default Home;


  


