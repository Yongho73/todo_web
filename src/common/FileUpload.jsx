import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

function FileUpload(props) {

    const onDrop = (acceptedFiles, fileRejections) => {
        fileRejections.forEach((file) => {
            file.errors.forEach((err) => {
                if (err.code === 'file-too-large') {
                    alert('파일이 너무 큽니다. 최대 용량은 50MB입니다.', 'warning')
                    return;
                }
                if (err.code === 'file-invalid-type') {
                    alert('허용하지않는 확장자입니다.', 'warning');
                    return;
                }
            });
        });
        const count = props.states.attachFiles.length + acceptedFiles.length
        if (count > 3) {
            alert('파일은 최대 3개까지 등록 가능합니다', 'warning')
            return;
        }
        props.setStates( {...props.states.attachFiles, acceptedFiles});

        console.log("acceptedFiles===")
        console.log(acceptedFiles)
        console.log(props.states.attachFiles)
        console.log("acceptedFiles===")
    };

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
    } = useDropzone({accept: {'image/*': []}, onDrop, maxSize: 5242880, multiple: true});



    return (
        <>
            <div className='file' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>파일 업로드</p>
            </div>

            {props.states.attachFiles.length != 0 &&

                props.states.attachFiles.map((file, idx) =>
                        <div key={idx}>
                            {file.name}
                        </div>
                    )

            }
        </>
    )
}

export default FileUpload;