import classes from './ProfileDetails.module.css'
import Star from '../../assets/images/Star.png';
import Smile from '../../assets/images/Smiley.png';
import ThumbsUp from '../../assets/images/ThumbsUp.png';
import Heart from '../../assets/images/Heart.png';
import { useEffect } from 'react';

interface PropsUser {
    email: string,
    name: string,
    birth_date: string,
    country: string,
    city: string,
    relationship: string,
    profession: string
}
 

function ProfileDetails(props:PropsUser) {
        
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 360) {
                const spans = document.querySelectorAll(`.${classes.__divPreferences} span`)! as NodeListOf<HTMLSpanElement>;

                spans.forEach((span) => {
                    const text = span.textContent;

                    if (text !== 'Trap' && text !== 'A rede social' && text !== 'Ver Todos') {
                        span.style.display = 'none';
                    }
                });
            }
        };

        
        handleResize();

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const birth_date = props.birth_date;
    const bithDateConvertedToBrasil = birth_date.split('-').reverse().join('/');

    const ano_atual = new Date().getFullYear();
    const year = parseInt(bithDateConvertedToBrasil.split('/')[2]);

    const age = ano_atual - year;

    return (
        <>
            <div className={classes.__divContainer}>

                <h3 className={classes.nameTag}>Boa tarde, {props.name}</h3>
                <h3 className={classes.inputName}><span className={classes.inputNameContent}>Programar sem café é igual poeta sem poesia.</span></h3>
                <div className={classes.__divSpans}> 
                    <p className={classes.p}>Fãs</p>
                    <p className={classes.p}>Confiável</p>
                    <p className={classes.p}>Legal</p>
                    <p className={classes.p}>Sexy</p>
                </div>
                <div className={classes.__divImg}>
                    <img className={classes.img}src={Star} alt="Star" />
                    <img className={classes.img}src={Smile} alt="Smile" />
                    <img className={classes.img}src={Smile} alt="Smile" />
                    <img className={classes.img}src={ThumbsUp} alt="Like" />
                    <img className={classes.img}src={ThumbsUp} alt="Like" />
                    <img className={classes.img}src={ThumbsUp} alt="Like" />
                    <img className={classes.img}src={Heart} alt="Heart" />
                    <img className={classes.img}src={Heart} alt="Heart" />
                </div>
                <div className={classes.__divDetails}>
                    <h4 className={classes.details}>Relacionamento: <span>{props.relationship}</span></h4>
                    <h4 className={classes.details}>Aniversario: <span>{bithDateConvertedToBrasil}</span></h4>
                    <h4 className={classes.details}>Idade: <span>{age}</span></h4>
                    <h4 className={classes.details}>Quem sou eu: <span>{props.profession}</span></h4>
                    <h4 className={classes.details}>Moro: <span>{props.city}</span></h4>
                    <h4 className={classes.details}>País: <span>{props.country}</span></h4>
                </div>
                <div className={classes.__divPreferences}>
                    <h4 className={classes.h}>
                        Músicas: <span className={classes.word}></span> <span className={classes.word}></span> <span className={classes.word}></span> <span className={classes.verTodos}>Ver Todos</span>
                    </h4>
                    <h4 className={classes.h}>
                        Filmes: <span className={classes.word}></span> <span className={classes.word}></span> <span className={classes.verTodos}>Ver Todos</span>
                    </h4>
                </div>

            </div>
        </>
    )
}

export default ProfileDetails