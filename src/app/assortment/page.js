'use client'
import SecondHeader from "@/components/secondPage/secondHeader/secondHeader"
import SecondOffer from "@/components/secondPage/secondOffer/secondOffer"
import Appp from "@/components/appp/appp"
import { Test } from "@/components/testOffer/testOffer"
import { Component } from "react"
import { useState } from "react"
import Footer from "@/components/screens/footer/footer"

import data from "@/components/data/data"

export default function Assortment() {


    return (
        <main>
            <SecondHeader />
            <Appp />
            <Footer />
        </main>
    )
}
