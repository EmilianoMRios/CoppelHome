import './Footer.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Footer = () => (
  <footer className="footer">
  <div className="recibe-ofertas">
  <div>
  <Form>
      <Form.Group as={Row} className="m-0" controlId="formHorizontalEmail">
        <Form.Label column sm={5}>
        <h5 className='text-center'>Recibe ofertas y beneficios por correo</h5>
        </Form.Label>
      <Col sm={5} className="p-0 suscribeteBtn">
        <Form.Floating >
        <Form.Control type="email" placeholder="name@example.com" id="email" />
          <label htmlFor="email">Ingresa tu correo electronico</label>
      </Form.Floating>
      </Col>
      <Col sm={2} className="p-0 suscribeteBtn">
      <Button variant="primary" type="button">Suscribirme</Button>
      </Col>
      </Form.Group>
    </Form>
  </div>
  <div>
     <h6>Ventas por telefono</h6>
     <a href='tel:8002207735' className='blue-a'>800 220 7735</a>
     <p className='nomarging'>Horario de atencion telefonica</p>
     <small>7:00 a 21:00 horas</small>
   </div>
   <div className='agreganos'>
      <h6>Agréganos</h6>
      <a href='/'>
        <img className='img-agreganos' src ="https://www.coppel.com/wcsstore/CoppelStoreFrontAssetStore/images/homepage/logo_whatsapp.png" alt="">
        </img> 
      </a>
    </div>
  </div> 

  <div className='text-center gotop'>
    <h6 className='m-0 p-3'>Ir al inicio</h6>
  </div>

  <Row className='compra-app'>
     <Col sm={5}>
      <Row>
      <Col sm={4} className="compra-p">
      <p>COMPRA SEGURA</p>
      </Col>
      <Col sm={8}>
        <span><img src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Accertify.svg" alt=""></img></span>
        <span><img src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Secure.svg" alt=""></img></span>
        <span><img src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/AIMX.svg" alt=""></img></span>
      </Col>
      </Row>
      
     </Col>
     <Col sm={7}>
     <Row>
      <Col sm={5} className="compra-p">
      <p>DESCARGA NUESTRA APP COPPEL</p>
      </Col>
      <Col sm={7}>
        <a href="https://play.google.com/store/apps/details?id=com.coppel.coppelapp">
          <img src="https://www.coppel.com/wcsstore/CoppelStoreFrontAssetStore/emarketing/footer/Play_store.svg" alt=""></img></a>
        <a href="https://itunes.apple.com/app/id1267382794">
          <img src="https://www.coppel.com/wcsstore/CoppelStoreFrontAssetStore/emarketing/footer/Apple_Store.svg" alt=""></img></a>
        <a href="https://appgallery7.huawei.com/#/app/C100930013">
          <img src="https://www.coppel.com/wcsstore/CoppelStoreFrontAssetStore/emarketing/footer/Huaweii.svg" alt=""></img></a>
      </Col>
      </Row>
     </Col>
   </Row>

   <Row className='links'>
      <Col sm={3}>
        <b className='margin'>ACERCA DE COPPEL</b>
        <ul className='color margin'>
          <li><a href="https://www.coppel.com/acerca-de-nosotros">Acerca de nosotros</a></li>
          <li><a href="https://checkout.coppel.com/checkout/adicional/bolsa_trabajo/bolsa-trabajo.php">Trabaja con nosotros</a></li>
          <li><a href="http://proveedores.coppel.com">Proveedores</a></li>
          <li><a href="https://www.coppel.com/coppel-pay">Coppel Pay</a></li>
          <li><a href="https://seller.coppel.com/">Vende con nosotros</a></li>
          <li><a href="http://www.bancoppel.com/">BanCoppel</a></li>
          <li><a href="http://www.aforecoppel.com/">Afore Coppel</a></li>
          <li><a href="https://blog.coppel.com/sala-de-prensa-coppel">Sala de prensa</a></li>
          <li><a href="https://www.fundacioncoppel.org">Fundación Coppel</a></li>
        </ul>
      </Col>
      <Col sm={2}>
      <b>ATENCION A CLIENTES</b>
        <ul className='color'>
          <li><a href="/servicios">Coppel Servicios</a></li>
          <li><a href="https://centrodeayuda.coppel.com/s/article/C%C3%B3mo-compro-en-Coppel-com">Cómo comprar</a></li>
          <li><a href="https://www.coppel.com/beneficios-coppel">Beneficios Coppel</a></li>
          <li><a href="https://centrodeayuda.coppel.com/s/article/Qu%C3%A9-formas-de-pago-tengo-en-Coppel">Métodos de pago</a></li>
          <li><a href="https://centrodeayuda.coppel.com/s/cambios-devoluciones-y-garantias">Cambios y devoluciones</a></li>
          <li><a href="https://centrodeayuda.coppel.com">Preguntas frecuentes</a></li>
          <li><a href="https://www.coppel.com/quejas-y-sugerencias">Quejas y sugerencias</a></li>
          <li><a href="http://seguro.coppel.com/facturascoppel/">Factura electrónica</a></li>
        </ul>
      </Col>
      
      <Col sm={2}>
      <b>PUBLICACIONES COPPEL</b>
        <ul className='color'>
          <li><a href="https://revista.coppel.com/coppel/SeptiembreDiasCoppel22?utm_source=SitioWeb&utm_medium=Footer&utm_campaign=SeptiembreDiasCoppelmundial22">Revista El Mundial</a></li>
          <li><a href="https://blog.coppel.com/">Blog Mejora Tu vida</a></li>
          <li><a href="https://www.coppel.com/coppel-max">Coppel Max</a></li>
          <li><a href="https://www.cumplimientogrupocoppel.com/">Cumplimiento Grupo Coppel</a></li>
          <li><a href="https://periodicosyrevistas.coppel.com/?utm_source=Sitioweb&utm_medium=footer&utm_campaign=Repositorio">Periódicos y Revistas Coppel</a></li>
          <li><a href="https://revista.coppel.com/coppel/EspecialMotos1web2022?utm_source=SitioWeb&utm_medium=Footer&utm_campaign=EspecialMotos1web2022">Revista Motos</a></li>
          <li><a href="https://revista.coppel.com/coppel/RecetarioRecordweb/">Recetario Record</a></li>
        </ul>
      </Col>
      
      <Col sm={2}>
      <b>DESTACADOS</b>
        <ul className='color'>
          <li><a href="/motorola">Celulares Motorola</a></li>
          <li><a href="/celulares-telcel">Celulares Telcel</a></li>
          <li><a href="/audifonos">Audífonos</a></li>
          <li><a href="/playstation">Consolas Playstation</a></li>
          <li><a href="/refrigeradores-y-congeladores">Refrigeradores y Congeladores</a></li>
          <li><a href="/laptops">Laptops</a></li>
          <li><a href="/celulares-reacondicionados">Celulares Reacondicionados</a></li>
          <li><a href="/tenis-deportivos-para-mujeres">Tenis Deportivos para Mujeres</a></li>
        </ul>
      </Col>

      <Col sm={2}>
      <b>REDES SOCIALES</b>
        <ul className='color'>
          <li><a href="https://www.facebook.com/tiendascoppel">Facebook</a></li>
          <li><a href="https://www.instagram.com/coppel/">Instagram</a></li>
          <li><a href="https://www.youtube.com/user/tiendascoppel">Youtube</a></li>
          <li><a href="http://www.tiktok.com/@coppel">TikTok</a></li>
        </ul>
      </Col>
   </Row>

  <Row className='links-terms'>
    <Row>
      <Col sm={12} className="text-center">
      <a className='links-items' href="https://www.coppel.com/aviso-de-privacidad">Aviso de privacidad</a>
      <a className='links-items' href="https://www.coppel.com/terminos-y-condiciones">Términos y condiciones</a>
      <a className='links-items' href="https://www.coppel.com/aviso-no-discriminacion">Aviso de no discriminación</a>
      <a className='links-items' href="https://www.coppel.com/compra-segura">Seguridad en Coppel.com</a>
      <a className='links-items' href="https://www.coppel.com/mapa-del-sitio">Mapa del sitio</a>
      <a className='links-items' href="https://www.coppel.com.ar/?utm_source=coppel.com&utm_medium=referral">Coppel Argentina</a>
      <a className='links-items' href="https://www.hearcolors.com.mx/SelloAccesibilidad.php?num_clte=FA30D267">                    Declaración de accesibilidad</a>
      </Col>
    </Row>
    <Row className='text-terms'>
      <Col sm={12} className="text-center">
       <p>Todos los precios en Coppel.com son en pesos mexicanos e incluyen impuestos. Los precios y promociones de nuestro sitio web son exclusivos de Coppel.com. Los abonos quincenales, el plazo o el pago inicial pueden variar según el margen de crédito y el historial de pago de cada cliente. Los quincenales contemplan: 24, 36, 48, 60 o 72 quincenas para muebles y 24 quincenas para ropa. Los productos de Marketplace que lleves con tu crédito Coppel, cuentan con un plazo de 24 quincenas y son financiados con Coppel Pay.</p>
      </Col>
    </Row>
    <Row className='text-terms'>
      <Col sm={12} className="text-center">
       <p>2022 © Coppel todos los derechos reservados</p>
      </Col>
    </Row>
  </Row>
 </footer>
);
  
export default Footer;

