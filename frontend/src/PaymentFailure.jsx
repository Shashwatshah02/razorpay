import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import { useSearchParams } from "react-router-dom"
const PaymentFailure = () => {

    // const seachQuery = useSearchParams()[0]

    // const referenceNum = seachQuery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order failure</Heading>

                <Text>
                    Reference No. : 123456789
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentFailure