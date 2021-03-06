import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, Stack, Typography} from "@mui/material";
import axios from 'axios'

import {useReactMediaRecorder} from "react-media-recorder";
import {css} from "@emotion/css";

import {fullHeightChild} from '../GlobalCSS'

let recorderStyle = css`
  ${fullHeightChild}; 
  border: solid black 1px; 
`

const Recorder = ({
    screen,
    audio,
    video,
    downloadRecordingPath,
    downloadRecordingType
}) => {

    let [recordingNumber, setRecordingNumber] = useState(0)

    const RecordView = () => {
        const {
            error,
            status,
            mediaBlob,
            getMediaStream,
            startRecording: startRecord,
            stopRecording: stopRecord,
            mediaBlobUrl
        } = useReactMediaRecorder({screen: true, audio:false})

        const startRecording = () => {
            return startRecord()
        }

        const stopRecording = () => {
            const currentTimestamp = new Date().getTime();
            setRecordingNumber(currentTimestamp);
            return stopRecord();
        }

        const viewRecording = () => {
            window.open(mediaBlobUrl, "_blank").focus()
        }

        const downloadRecording = () => {
            const pathName = `${downloadRecordingPath}_${recordingNumber}.mp4`
            try {
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName)
                }
                else {
                    const link = document.createElement("a");
                    link.href = mediaBlobUrl;
                    link.download = pathName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } catch (err) {
                console.log(err);
            }
        };

        const uploadRecording = async () => {
            console.log("IN upload")
            let blob = await fetch(mediaBlobUrl).then(async r => r.blob());
            const audioFile = new File([blob], 'file.mp4', { type: 'video/mp4' });
            const formData = new FormData();
            formData.append('recordingFile', audioFile)
            formData.append("videoID", "kdkjskdksdj")
            formData.append("categoryName", "category")
            axios.post(
                "http://localhost:8081/v1/recording/save",
                formData,
                {
                    headers: {"Content-Type": "multipart/form-data"},
                }).then((response) => {
                console.log(response);
            });
        }

        return (
            <div className={recorderStyle}>
                <Stack direction="row" spacing={2}>
                    {status && status !== "recording" && (
                        <Button variant="contained" type="submit" onClick={startRecording}>
                            {mediaBlobUrl ? "Record new Video" : "Record"}
                        </Button>
                    )}
                    {status && status === "recording" && (
                        <Button variant="contained" type="submit" onClick={stopRecording}>
                            Stop
                        </Button>
                    )}
                    {mediaBlobUrl && status && status === "stopped" && (
                        <Button variant="contained" type="submit" onClick={viewRecording}>
                            View Recording
                        </Button>
                    )}
                    {mediaBlobUrl && status && status === "stopped" && (
                        <Button variant="container" type="submit" onClick={downloadRecording}>
                            Download Recording
                        </Button>
                    )}
                </Stack>
                <Typography variant="h4" component="div">
                    Estado de la grabaci??n: {status && status.toUpperCase()}
                </Typography>
            </div>
        )
    }

    return RecordView();
}

export default Recorder