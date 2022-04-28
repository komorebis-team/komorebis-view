import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, Stack, Typography} from "@mui/material";

import {useReactMediaRecorder} from "react-media-recorder";
import {css} from "@emotion/css";


let recorderStyle = css`
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
            status,
            startRecording: startRecord,
            stopRecording: stopRecord,
            mediaBlobUrl
        } = useReactMediaRecorder({screen: true, audio: true, video})

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
                            Save Recording
                        </Button>
                    )}
                </Stack>
                <Typography variant="h4" component="div">
                    Estado de la grabación: {status && status.toUpperCase()}
                </Typography>
            </div>
        )
    }

    return RecordView();
}

export default Recorder