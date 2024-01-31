import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from "@syncfusion/ej2-react-heatmap";
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux';
import { HeatMapData } from '../../../../actions/inverterActions';
import { useLocation } from 'react-router-dom';
import SpinLoader from '../../../../components/SpinLoader';



var heatmapData = [
    [73, 39, 26, 39, 94, 10, 23, 22, 34, 45, 34, 34],
    [93, 58, 53, 38, 26, 68, 23, 22, 34, 45, 34, 34],
    [99, 28, 22, 4, 66, 90, 23, 22, 34, 45, 34, 34],
    [14, 26, 97, 69, 69, 3, 23, 22, 34, 45, 34, 34],
    [7, 46, 47, 47, 88, 6, 23, 22, 34, 45, 34, 34],
    [41, 55, 73, 23, 3, 79, 23, 22, 34, 45, 34, 34],
    [56, 69, 21, 86, 3, 33, 23, 22, 34, 45, 34, 34],
    [45, 7, 53, 81, 95, 79, 23, 22, 34, 45, 34, 34],
    [60, 77, 74, 68, 88, 51, 23, 22, 34, 45, 34, 34],
    [25, 25, 10, 12, 78, 14, 23, 22, 34, 45, 34, 34],
    [25, 56, 55, 58, 12, 82, 23, 22, 34, 45, 34, 34],
    [74, 33, 88, 23, 86, 59, 23, 22, 34, 45, 34, 34]
];



const HeatmapInverter1 = () => {

    const { heatmapData, error, loading } = useSelector(state => state.heatmapData)

    const dispatch = useDispatch();
    const location = useLocation();
    const inverter = location.pathname.split("/")[4];

    useEffect(() => {
        dispatch(HeatMapData(inverter[inverter?.length - 1]))
    }, [dispatch])

    console.log(heatmapData?.minValue, heatmapData?.maxValue)
    return (

        <>

            {loading ? <SpinLoader /> :


                <Grid container lg={12} boxSizing={"border-box"}
                    style={{
                        paddingBottom: "1rem"
                    }}
                >


                    <Grid item lg={11.8}
                        borderRadius={"14px"}
                        boxSizing={"border-box"}
                        style={{
                            background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "1rem",
                            marginLeft: "0.8rem",
                            padding: "1rem"
                        }}>
                        <Grid
                            item
                            lg={11.7}
                            // border={3}
                            // borderColor={"#ed7d31"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            position={"relative"}
                            bgcolor={"white"}
                            borderRadius={"14px"}
                            paddingTop={"1rem"}

                        >
                            <h3 style={{ padding: "0", margin: "0" }}>HeatMap Analysis For Inverter{inverter[inverter?.length - 1]}</h3>
                            <Chart height={540} width={1300} type='heatmap' options={{
                                plotOptions: {

                                    heatmap: {
                                        distributed: true,
                                        shadeIntensity: 1,
                                        // reverseNegativeShade:false,
                                        // shadeIntensity: 0.5,
                                        // radius: 0,
                                        // useFillColorAsStroke: true,
                                        colorScale: {

                                            ranges: [{
                                                from: -30,
                                                to: -15,
                                                name: 'low',
                                                color: '#00A100',

                                            },
                                            {
                                                from: -14,
                                                to: -12,
                                                name: 'medium',
                                                color: '#128FD9'
                                            },
                                            {
                                                from: -11,
                                                to: -9,
                                                name: 'high',
                                                color: '#FFB200'
                                            },
                                            {
                                                from: -8,
                                                to: -5,
                                                name: 'extreme',
                                                color: '#FF0000'

                                            }
                                            ]
                                        }
                                    }
                                },
                                xaxis: {
                                    labels: {
                                        style: {
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"

                                        }
                                    }
                                },
                                yaxis: {
                                    labels: {
                                        style: {
                                            fontSize: "1.1rem",
                                            // fontWeight:"600",
                                            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"

                                        }
                                    }
                                },
                                grid: {
                                    show: true,
                                    borderColor: "red",
                                },


                                dataLabels: {
                                    enabled: false,


                                },
                                // stroke: {
                                //     width: 5
                                // },

                                // title: {
                                //     text: 'HeatMap Chart with Color Range'
                                // },
                            }} series={heatmapData?.data || []} />


                        </Grid>
                    </Grid>
                </Grid>
            }
        </>

    )
}

export default HeatmapInverter1


