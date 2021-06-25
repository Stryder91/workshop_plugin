import React, {useState} from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import {faGoogleDrive} from '@fortawesome/free-solid-svg-icons';

import { Input } from 'reactstrap';

/// MEET
// https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1200px-Google_Meet_icon_%282020%29.svg.png
const MyAccordeon = (props) => {

  const [myState, setMyState] = useState(null);

  const helpToChat = (cmd) => {
    const myInput = document.getElementById('post_textbox');
    const divToErase = myInput.previousElementSibling;
    divToErase.innerHTML = "";
    myInput.value = "";
    myInput.placeholder = cmd;
  }
  return (
    <div style={style.grey}>
        <div className="d-flex justify-content-between">
            <div> <h6 ><b>Que voulez-vous faire ?</b></h6> </div>
            <div> <FontAwesomeIcon onClick={() => setMyState(null)} icon={faUndo} /></div>
        </div>
        
        {(!myState) ?
        <ListGroup>
            <ListGroupItem onClick={()=> setMyState('new')}>
                <FontAwesomeIcon icon={faPlus} />
                <div className="d-flex text-center py-3"> 
                    Créer un nouveau projet 
                </div>
            </ListGroupItem>
            <ListGroupItem onClick={() => setMyState('list-scenario')}>
                <FontAwesomeIcon icon={faEdit} />
                <div className="d-flex text-center py-3"> Modifier un projet existant </div>
            </ListGroupItem>
            <ListGroupItem>
                <FontAwesomeIcon icon={faBan} />
                <div className="d-flex text-center py-3"> Supprimer projet </div>
            </ListGroupItem>
            <ListGroupItem>
                <FontAwesomeIcon icon={faVideo} />
                <div className="d-flex text-center py-3"> Créer une visio </div>
            </ListGroupItem>
            <ListGroupItem>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <div className="d-flex text-center py-3"> Créer un event </div>
            </ListGroupItem>
            <ListGroupItem>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <div className="d-flex text-center py-3"> Créer un ticket</div>
            </ListGroupItem>
        </ListGroup>
        :null}
        {(myState == 'new') ? 
        <NewProject setMyState={setMyState}/>
        :null}
        {(myState == 'list-scenario') ?
        <ListGroup>
            <ListGroupItem onClick={() => helpToChat('project calendar 2021-06-23 19:53 4 drive workshop')}>
                <h6><b>School Project</b></h6>
                <div className="d-flex text-center py-3"> Google Calendar + Drive </div>
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
                <div className="d-flex text-center py-3"> Trello + Drive + Gmail</div>
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
                <div className="d-flex text-center py-3"> Zoom + Slide </div>
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
                <div className="d-flex text-center py-3"> Trello + Git </div>
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
        :null}
    </div>
  );
}
const style = {
    grey: {
        color: 'grey'
    },
    rhs: {
        padding: '10px',
    },
    bigContainerIcon: {
        width: '60px',
        height: '60px',
        padding: '10px',
    }, 
    containerIcon: {
        width: '30px',
        margin: '5px',
    },
    imgWidth: {
        width: '100%',
        height: 'auto',
    },
    containerFlatIcon: {
        display: 'flex',
        justifyContent: 'center',
    },
    mauto: {
        margin: 'auto'
    }
};

const MA_LISTE = [
    "https://image.flaticon.com/icons/png/512/281/281769.png",
    "https://cdn.shopify.com/s/files/1/1713/4683/products/logo-zoom-new_d82834f9-7569-4c42-927e-e486c33f5396_800x.png?v=1612135156",
    "https://img2.freepng.fr/20190622/khw/kisspng-github-continuous-integration-microsoft-azure-sour-innovation-research-lab-irl-5d0ee306c7f871.6978428915612567108191.jpg",
    "https://uploads-ssl.webflow.com/5ebd54898c31000820363e17/5f282977eb5bb481b3fd4385_trello.png",
    "https://neo-form.fr/wp-content/uploads/2018/09/google-slides.png", 
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    "http://assets.stickpng.com/images/5847f997cef1014c0b5e48c1.png",
    "https://img.icons8.com/small/452/github.png",
    "https://brandslogos.com/wp-content/uploads/thumbs/dropbox-logo-vector-2.svg",  
    "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    "https://logo-marque.com/wp-content/uploads/2021/03/Jira-Embleme.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://img2.freepng.fr/20180720/vi/kisspng-redmine-computer-icons-logo-clip-art-redmine-5b5253f819daa0.9441945415321221041059.jpg",
    "https://cdn.worldvectorlogo.com/logos/miro-2.svg"
];


const NewProject = () => {

    const [selected, setSelected] = useState([]);
    const [steps, setSteps] = useState(0);
    const [name, getName] = useState('');

    const selectService = (id) => {
        console.log("selected", selected);
        setSelected([...selected, id]);
    }

    const setNameToChat = () => {
        const myString = "Milo " + name;
        const myInput = document.getElementById('post_textbox');
        const divToErase = myInput.previousElementSibling;
        divToErase.innerHTML = "";
        myInput.placeholder = "";
        myInput.value = myString;
    }


    return(
    <div style={style.grey}>
        <div>
            <div> <h5><b>Créer un nouveau projet</b></h5> </div>

            {(steps === 0) ? 
            <>
            <Input placeholder="Rechercher un web service" />
            <p className="pt-4">Selectionner un ou plusieurs webservice</p>
            <div className="d-flex flex-wrap">
                <FontAwesomeIcon icon={faGoogleDrive} />
                {
                MA_LISTE.map((el, index) => 
                    <div onClick={() => selectService(index)} id={index} style={style.bigContainerIcon}>
                        <img style={style.imgWidth} src={el} alt="service_icon" />
                    </div>
                ) 
                }
                
            </div>
            {(selected && selected.length > 0) 
            ?
            <div className="d-flex">
                <Button onClick={() => setSteps(steps+1)} style={style.mauto} variant="secondary">Valider</Button>
            </div>
            :null}
            </>
            :
            (steps == 1) 
            ?
            <div>
                <div className="d-flex flex-wrap justify-content-center">
                {selected.map( el => <div style={style.bigContainerIcon}><img style={style.imgWidth} src={MA_LISTE[el]} alt="service_icon" /></div>)}
                </div>
                <Input onChange={(e) => getName(e.target.value)} placeholder="Choisissez un nom" />
                <div className="d-flex mt-5">
                    <Button onClick={setNameToChat} style={style.mauto} variant="success">Partager</Button>
                </div>
            </div>
            :null}
        </div>
    </div> 
    );
}
https://cdn.worldvectorlogo.com/logos/miro-2.svg

{/* <div onClick={(e) => selectService(e)} id="2" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src={MA_LISTE.deux} alt="meet_icon" />
</div>
<div onClick={(e) => selectService(e)} id="3" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src={MA_LISTE.trois} alt="slide_icon" />
</div>
<div onClick={(e) => selectService(e)} id="4" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src={MA_LISTE} alt="trello_icon" />
</div>
<div onClick={(e) => selectService(e)} id="5" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="slide_icon" />
</div>
<div onClick={(e) => selectService(e)} id="6" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="drive_icon" />
</div>
<div onClick={(e) => selectService(e)} id="7" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="gitlab_icon" />
</div>
<div onClick={(e) => selectService(e)} id="8" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="github_icon" />
</div>
<div onClick={(e) => selectService(e)} id="9" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="dropbox_icon" />
</div>
<div onClick={(e) => selectService(e)} id="10" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="git_icon" />
</div>
<div onClick={(e) => selectService(e)} id="11" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="jira_icon" />
</div>
<div onClick={(e) => selectService(e)} id="12" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="figma_icon" />
</div>
<div onClick={(e) => selectService(e)} id="13" style={style.bigContainerIcon}>
    <img style={style.imgWidth} src="" alt="redmine_icon" />
</div> */}
export default MyAccordeon;