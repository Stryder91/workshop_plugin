import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


/// MEET
// https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1200px-Google_Meet_icon_%282020%29.svg.png
const MyAccordeon = (props) => {

  const helpToChat = (cmd) => {
    const myInput = document.getElementById('post_textbox');
    const divToErase = myInput.previousElementSibling;
    divToErase.innerHTML = "";
    myInput.value = "";
    myInput.placeholder = cmd;
  }
  return (
    <div>
        <ListGroup>
        <ListGroupItem onClick={() => helpToChat('project calendar 2021-06-23 19:53 4 drive workshop')}>
            <h6><b>School Project</b></h6>
            <div className="d-flex text-center pb-2"> Google Calendar + Drive </div>
            <div className="d-flex">
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="agenda_icon" />
                </div>
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="drive_icon" />
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem onClick={() => helpToChat('companies trello 2021-06-23 19:53 4 gmail nouveau_projet')}>
            <h6><b>Companies Project</b></h6>
            <div className="d-flex text-center pb-2"> Trello + Drive + Gmail</div>
            <div className="d-flex">
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://uploads-ssl.webflow.com/5ebd54898c31000820363e17/5f282977eb5bb481b3fd4385_trello.png" alt="trello_icon" />
                </div>
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="drive_icon" />
                </div>
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://image.flaticon.com/icons/png/512/281/281769.png" alt="gmail_icon" />
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem onClick={() => helpToChat('companies zoom 2021-06-23 19:53 4 slide oui_oui')}>
            <h6><b>Companies Meeting</b></h6>
            <div className="d-flex text-center pb-2"> Zoom + Slide </div>
            <div className="d-flex">
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://uploads-ssl.webflow.com/5ebd54898c31000820363e17/5f282977eb5bb481b3fd4385_trello.png" alt="trello_icon" />
                </div>
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://neo-form.fr/wp-content/uploads/2018/09/google-slides.png" alt="slide_icon" />
                </div>
            </div>
        </ListGroupItem>
        <ListGroupItem onClick={() => helpToChat('dev trello 2021-06-23 19:53 4 git nouveau_dev')}>
            <h6><b>Dev project</b></h6>
            <div className="d-flex text-center pb-2"> Trello + Git </div>
            <div className="d-flex">
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://cdn.shopify.com/s/files/1/1713/4683/products/logo-zoom-new_d82834f9-7569-4c42-927e-e486c33f5396_800x.png?v=1612135156" alt="meet_icon" />
                </div>
                <div style={style.containerIcon}>
                    <img style={style.imgWidth} src="https://img2.freepng.fr/20190622/khw/kisspng-github-continuous-integration-microsoft-azure-sour-innovation-research-lab-irl-5d0ee306c7f871.6978428915612567108191.jpg" alt="slide_icon" />
                </div>
            </div>
        </ListGroupItem>
        </ListGroup>
    </div>
  );
}
const style = {
    rhs: {
        padding: '10px',
    },
    containerIcon: {
        width: '30px',
        margin: '5px',
    },
    imgWidth: {
        width: '100%',
        height: 'auto',
    }
};

export default MyAccordeon;