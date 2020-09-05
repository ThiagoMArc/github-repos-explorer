import React from 'react';
import { Title, Form, Repositories } from './style'
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../../assets/logo-expl.svg'


const DashBoard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore Repositórios no github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src="" alt="" />
          <div>
            <strong>rocketseat/unform</strong>
            <p></p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default DashBoard;
