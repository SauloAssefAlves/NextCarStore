import { Container } from "../../components/container";
import { useEffect } from "react";
import axios from "axios";

export function Home() {


  return (
    <>
      <Container>
        <section className='bg-white p-4 rounded-md max-w-3xl mx-auto flex justify-center items-center gap-2'>
          <input
            className='w-full border-2 rounded-md h-9 px-3 outline-none'
            placeholder='Digite o nome do carro...'
          />
          <button className='bg-blue-500 h-9 px-8 rounded-md text-white font-semibold text-lg'>
            Buscar
          </button>
        </section>
        <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-6'>
          <section className='w-full bg-white rounded-lg'>
            <img
              className='w-full rounded-lg mb-2 h-72 hover:scale-105 transition-all'
              src='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202407/20240730/mercedesbenz-gle-450d-3-0-i6-mhev-diesel-coupe-4matic-9gtronic-wmimagem12411489317.webp?s=fill&w=552&h=414&q=60'
              alt='Carro'
            />
            <p className='font-bold mt-1 mb-2 px-2'>BMW 320i</p>
            <div className='flex flex-col px-2'>
              <span className='text-zinc-700 mb-6'>
                Ano 2016/2016 | 23.000 km
              </span>
              <strong className='text-black font-medium text-xl'>
                R$ 190.000
              </strong>
            </div>
            <div className='w-full h-px bg-slate-200 my-2'></div>
            <span className='text-zinc-700 px-2 pb-2 block'>
              Campo Grande - MS
            </span>
          </section>
        </main>
      </Container>
    </>
  );
}
