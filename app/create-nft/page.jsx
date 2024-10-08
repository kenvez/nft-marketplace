'use client';

import { useState, useMemo, useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'next-themes';
import { Button, Input, NFTCard } from '../../components';
import Image from 'next/image';
import images from '../../assets';

const CreateNFT = () => {
  const { theme } = useTheme();
  const { fileUrl, setFileUrl } = useState(null);
  const [formInput, setFormInput] = useState({ price: '', name: '', description: '' });

  const onDrop = useCallback(() => {
    // upload image to the blockchain
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white
      border-nft-gray-2 flex flex-col items-center p-5 rounded-sm
      border-dashed
      ${isDragActive && 'border-file-action'}
      ${isDragAccept && 'border-file-accept'}
      ${isDragReject && 'border-file-reject'}
      `,
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <div className='flex justify-center sm:px-4 p-12'>
      <div className='w-3/5 md:w-full'>
        <h1 className='font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0'>
          Create new nft
        </h1>
        <div className='mt-16 ml-4 xs:ml-0'>
          <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl'>
            Upload file
          </p>
          <div className='mt-4'>
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className='flexCenter flex-col text-center'>
                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl'>
                  JPG, PNG, GIF, SVG, WEBM. Max 100mb.
                </p>
                <div className='my-12 w-full flex justify-center'>
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    objectFit='contain'
                    alt='file upload'
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-sm'>
                  Drag and drop file
                </p>
                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-sm'>
                  or browse media on your device
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <img src={fileUrl} alt='asset-file' />
                </div>
              </aside>
            )}
          </div>
        </div>
        <Input
          inputType='input'
          title='Name'
          placeholder='Name'
          handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
        <Input
          inputType='textarea'
          title='Description'
          placeholder='Description'
          handleClick={(e) => setFormInput({ ...formInput, description: e.target.value })}
        />
        <Input
          inputType='number'
          title='Price'
          placeholder='Price'
          handleClick={(e) => setFormInput({ ...formInput, price: e.target.value })}
        />
        <div className='mt-7 w-full flex justify-end'>
          <Button btnName='Create NFTCard' classStyles='rounded-xl' handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
