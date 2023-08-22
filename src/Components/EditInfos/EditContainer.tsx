import classes from './EditContainer.module.css'

import pfp from '../../assets/iuri.jpeg'
import simpleLogo from '../../assets/logo-orkut-simples.svg'
import InputChips from './InputChips';


const Editing = () => {

    return (
        <section className={classes.container}>
            <section className={classes.editText}>
                <img src={simpleLogo} className={classes.simpleLogo} />
                <h1>Editar informações</h1>
            </section>

            <section className={classes.field}>
                <label>Foto de perfil</label>
                <img src={pfp} alt="Sua foto"  className={classes.file}/>
                <input type="file" className={classes.inputFile} />
            </section>
            <section className={classes.field}>
                <label>Nome</label>
                <input type="text" placeholder='Digite seu novo nome' className={classes.input} />
            </section>
            <section className={classes.field}>
                <label>E-mail</label>
                <input type="email" placeholder='Altere seu e-mail' className={classes.input} />
            </section>
            <section className={classes.field}>
                <label>Senha</label>
                <input type="password" placeholder='Digite sua nova senha' className={classes.input} />
            </section>
            <section className={classes.field}>
                <label>Cidade</label>
                <input type="text" placeholder='Digite sua cidade' className={classes.input} />
            </section>
            <section className={classes.field}>
                <label>Estado</label>
                <input type="text" placeholder='Digite seu estado' className={classes.input} />
            </section>
            <section className={classes.field}>
                <label>Autodescrição</label>
                <input type="text" placeholder='Fale um pouco sobre você' className={classes.input} />
            </section>
            <section className={classes.field}>
                <label>Status de relacionamento</label>
                <select className={classes.select} >
                    <option disabled selected>
                        Selecione seu status de relacionamento
                    </option>
                    <option >Solteiro(a)</option>
                    <option >
                        Em um relacionamento sério
                    </option>
                    <option >Noivo(a)</option>
                    <option >Casado(a)</option>
                </select>
            </section>
            <section className={classes.field}>
                <label>Filhos</label>
                <select className={classes.select}>
                    <option disabled selected>
                        Você tem filhos?
                    </option>
                    <option>Sim</option>
                    <option>Não</option>
                </select>
            </section>
            <section className={classes.field}>
                <label>Hábitos de fumo</label>
                <select className={classes.select}>
                    <option disabled selected>
                        Você fuma?
                    </option>
                    <option>Sim</option>
                    <option>Não</option>
                </select>
            </section>
            <section className={classes.field}>
                <label>Interesses</label>
                <InputChips placeholder='Digite alguns de seus interesses' />
            </section>
            <section className={classes.field}>
                <label>Músicas favoritas</label>
                <InputChips placeholder='Digite suas músicas favoritas' />
            </section>
            <section className={classes.field}>
                <label>Filmes favoritos</label>
                <InputChips placeholder='Digite seus filmes favoritos' />
            </section>

            <section className={classes.field}>
                <a href='/'>Salvar e sair</a>
            </section>
        </section>
    );
}

export default Editing;