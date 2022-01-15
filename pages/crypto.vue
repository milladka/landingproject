<template>
  <div>
    <v-container
      fluid
      fill-height
      class="bg-top position-relative"
    >
      <div class="overlay-top"></div>
      <v-row class="zindex-head">
        <v-col
          cols="12"
          md="6"
          class="pa-5 pa-md-15"
        >
          <div class="white--text">
            <h1 class="display-2">{{$t('HeadingHome')}}</h1>
            <p class="title mt-7">
              {{$t('ParagraphHomeOne')}}
              <br>
              {{$t('ParagraphHomeTwo')}}
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >2</v-col>
      </v-row>
    </v-container>
    <v-container class="my-10 my-md-16 py-10">
      <v-row>
        <v-col cols="12">
          <p class="display-1 accent--text text-center mb-16 px-2 new-line-height">
            {{$t('ParagraphUnderSlide')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/asset-four.png"
              height="120px"
              width="125px"
            ></v-img>
            <div class="mt-7 accent--text text-center font-weight-bold">
              {{$t('ElementFour')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/asset-three.svg"
              height="120px"
              width="125px"
            ></v-img>
            <div class="mt-7 accent--text text-center font-weight-bold">
              {{$t('ElementThree')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/asset-two.svg"
              height="120px"
              width="80px"
            ></v-img>
            <div class="mt-7 accent--text text-center font-weight-bold">
              {{$t('ElementTwo')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/asset-one.svg"
              height="120px"
              width="160px"
            ></v-img>
            <div class="mt-7 accent--text text-center font-weight-bold">
              {{$t('ElementOne')}}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="accent py-16"
    >
      <v-container class="my-5">
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 text-center mb-10 white--text">
              {{$t('ParagraphSectionThree')}}
            </h2>
          </v-col>
          <v-col
            cols="12"
            offset-md="1"
            md="10"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-five.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementOneSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementOneSectionThree')}}</p>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-six.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementTwoSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementTwoSectionThree')}}</p>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-seven.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementThreeSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementThreeSectionThree')}}</p>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-eight.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementFourSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementFourSectionThree')}}</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container
      fluid
      class="py-16"
    >
      <v-row>
        <v-col cols="12">
          <h3 class="display-1 text-center mb-8 primary--text">{{$t('SubjectSectionFour')}}</h3>
        </v-col>
        <v-col
          cols="12"
          offset-md="2"
          md="9"
          class="mt-5"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/asset-more-one.svg"
                    width="70px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 primary--text align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementOneSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementOneSectionFour')}}</p>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/asset-more-two.svg"
                    width="80px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 primary--text align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementTwoSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementTwoSectionFour')}}</p>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/asset-more-three.svg"
                    width="80px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 primary--text align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementThreeSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementThreeSectionFour')}}</p>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/asset-more-four.svg"
                    width="70px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 primary--text align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementFourSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementFourSectionFour')}}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          class="d-flex align-center justify-center mt-3"
        >
          <v-btn
            class="btn-register white--text"
            rounded
            depressed
            large
          >{{$t('BtnRegister')}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="section-five"
      fill-height
    ></v-container>
  </div>
</template>
<script>
export default {
  name: 'CryptoPage',
  head:{
    title:'Crypto'
  }
}
</script>