import { useState } from 'react'
import cl from '../styles/componentStyles/Footer.module.scss'

const Footer = () => {
  const [chatIsOpen, setChatIsOpen] = useState(false);

  return (
    <footer className={cl.footer}>
      <div className={cl.social_networks}>
        <div className="network_link">
          <a href='https://github.com/Alexander-Puv' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <div className="network_link">
          <a href="https://t.me/AlexanderPuv" target="_blank">
            <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="m21.094 3.634-3.199 16.523s-.447 1.146-1.677.596l-4.551-3.575-2.92 2.727s-.227.177-.477.066l.559-5.066.019.016.012-.103s8.186-7.54 8.521-7.86c.336-.321.224-.39.224-.39.022-.39-.604 0-.604 0L6.154 13.626l-4.519-1.558s-.693-.252-.76-.802c-.067-.55.783-.848.783-.848l17.96-7.22s1.476-.664 1.476.436Z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={cl.support}>
        <p>Мы всегда готовы вам помочь.</p>
        <div><button onClick={() => setChatIsOpen(true)}><span>Задать вопрос</span></button></div>
      </div>

      <div className={cl.copyrights}>
        <div className={cl.left}>
          <div><p>@ 2022&nbsp;</p><a href='https://github.com/Alexander-Puv' target="_blank">Alexander-Puv</a></div>
          <div><p>Адрес для обращений:&nbsp;</p><a href="mailto:sansano4sana@gmail.com" target="_blank" rel="noreferrer">sansano4sana@gmail.com</a></div>
        </div>
        <div className={cl.right}><p>Проект скопирован у компании</p>&nbsp;<a href="https://yandex.ru/all" target="_blank">
          <svg width="4.8rem" height="1.4rem" viewBox="0 0 48 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.85198 11.9271H7.92849V0H4.90812C1.87058 0 0.27458 1.56167 0.27458 3.86128C0.27458 5.69753 1.1498 6.77869 2.71148 7.89417L0 11.9271H2.24812L5.2685 7.41366L4.22167 6.71005C2.95173 5.85198 2.33393 5.1827 2.33393 3.74115C2.33393 2.47122 3.22631 1.61316 4.92528 1.61316H5.85198V11.9271ZM45.8892 12.0987C46.833 12.0987 47.5023 11.9271 48 11.5667V9.90204C47.4852 10.2624 46.8674 10.4855 46.0093 10.4855C44.5506 10.4855 43.9499 9.35288 43.9499 7.56811C43.9499 5.69753 44.6879 4.7365 46.0265 4.7365C46.8159 4.7365 47.5881 5.01108 48 5.2685V3.53522C47.571 3.29496 46.8159 3.12335 45.8034 3.12335C43.1949 3.12335 41.8391 4.99392 41.8391 7.61959C41.8391 10.5027 43.1605 12.0987 45.8892 12.0987ZM33.1212 11.3436V9.67894C32.4862 10.108 31.4222 10.4855 30.4269 10.4855C28.9339 10.4855 28.3675 9.78191 28.2817 8.34036H33.207V7.25921C33.207 4.25599 31.8856 3.12335 29.8434 3.12335C27.355 3.12335 26.1709 5.02824 26.1709 7.63675C26.1709 10.64 27.6468 12.0987 30.2553 12.0987C31.5595 12.0987 32.5206 11.7555 33.1212 11.3436ZM14.4154 3.29496V6.71005H11.6868V3.29496H9.64462V11.9271H11.6868V8.3232H14.4154V11.9271H16.4576V3.29496H14.4154ZM25.6732 10.3139H24.7637V3.29496H18.8087V4.03289C18.8087 6.14373 18.6714 8.87236 17.9507 10.3139H17.3157V13.9006H19.2034V11.9271H23.7855V13.9006H25.6732V10.3139ZM39.6425 11.9271H41.9592L38.6814 7.27637L41.5645 3.29496H39.5052L36.6221 7.27637V3.29496H34.5799V11.9271H36.6221V7.68824L39.6425 11.9271ZM29.8091 4.7365C30.8216 4.7365 31.1305 5.5774 31.1305 6.65856V6.83018H28.2817C28.3332 5.45728 28.8309 4.7365 29.8091 4.7365ZM22.7215 10.3139H19.8384C20.4047 9.00965 20.5592 6.65856 20.5592 5.16553V4.90812H22.7215V10.3139Z" fill="white"></path>
          </svg>
        </a></div>
      </div>

      {chatIsOpen && <div className={cl.chat}>
        Нет. Это делать я точно не хочу
        <svg width="3.2rem" height="3.2rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={() => setChatIsOpen(false)}>
          <path fillOpacity=".8" fill="#000" d="M10.94 12L7.47 8.53l1.06-1.06L12 10.94l3.47-3.47 1.06 1.06L13.06 12l3.47 3.47-1.06 1.06L12 13.06l-3.47 3.47-1.06-1.06z" />
        </svg>
      </div>}
    </footer>
  )
}

export default Footer