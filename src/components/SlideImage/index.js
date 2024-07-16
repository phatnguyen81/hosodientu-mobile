import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const url = '';
const uri = '';

const {width, height} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

const slideWidth = wp(95);

export const sliderWidth = width;
export const itemWidth = slideWidth + 5;

class MyListItem extends React.PureComponent {
  state = {
    link: null,
  };

  async getImages(url) {
    await fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (typeof responseJson.data[0].link == 'string') {
          let link = responseJson.data[0].link;

          this.setState({
            link: link,
          });
        }
      })

      .catch(err => {
        // console.log('fetch failed! ', err);
      });
  }

  _onPress = () => () => {
    // get ID cua store
    //    alert(""+this.props.item._id);
    this.props.handlingOpenStore(this.props.item);
  };

  async componentDidMount() {
    if (!this.props.load) {
      await this.getImages(
        url + 'beautystores/image/list?id=' + this.props.item._id,
      );
    }
  }

  render() {
    const {name, Address} = this.props.item;
    return (
      <View>
        <TouchableHighlight underlayColor="#fff" onPress={this._onPress()}>
          <View style={css.noibat_1}>
            <View style={css.hinh}>
              <Image
                style={{width: width * 0.96, height: 200, borderRadius: 10}}
                source={{uri: uri + this.state.link}}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class ListStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      i0: true,
      i1: false,
      i2: false,
      i3: false,
      i4: false,
    };
  }

  _keyExtractor = (item, index) => '' + index;

  _renderItem = ({item, index}) => (
    <MyListItem
      id={item.id}
      load={this.props.load}
      handlingOpenStore={this.props.handlingOpenStore}
      item={item}
      index={index}
      title={item.title}
    />
  );

  render() {
    if (this.props.data == null) {
      return <View />;
    }
    let selectColor = '#F24E86';
    let hideColor = '#dfe6e9';
    return (
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.props.data.slice(0, 4 + 1)}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
          onSnapToItem={index => {
            if (index === 0)
              this.setState({
                i0: true,
                i1: false,
                i2: false,
                i3: false,
                i4: false,
              });
            if (index === 1)
              this.setState({
                i0: false,
                i1: true,
                i2: false,
                i3: false,
                i4: false,
              });
            if (index === 2)
              this.setState({
                i0: false,
                i1: false,
                i2: true,
                i3: false,
                i4: false,
              });
            if (index === 3)
              this.setState({
                i0: false,
                i1: false,
                i2: false,
                i3: true,
                i4: false,
              });
            if (index === 4)
              this.setState({
                i0: false,
                i1: false,
                i2: false,
                i3: false,
                i4: true,
              });
          }}
        />
        <View style={css.view_index}>
          <View
            style={[
              css.view_oval,
              {backgroundColor: this.state.i0 ? selectColor : hideColor},
            ]}
          />
          <View
            style={[
              css.view_oval,
              {backgroundColor: this.state.i1 ? selectColor : hideColor},
            ]}
          />
          <View
            style={[
              css.view_oval,
              {backgroundColor: this.state.i2 ? selectColor : hideColor},
            ]}
          />
          <View
            style={[
              css.view_oval,
              {backgroundColor: this.state.i3 ? selectColor : hideColor},
            ]}
          />
          <View
            style={[
              css.view_oval,
              {backgroundColor: this.state.i4 ? selectColor : hideColor},
            ]}
          />
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  view_noi_bat: {
    width,
    height: height / 5,
    backgroundColor: '#707070',
  },
  view_index: {
    width,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view_oval: {
    width: 10,
    height: 10,
    margin: 4,
    borderRadius: 10,
    backgroundColor: '#E7004E',
  },
  view_title_noi_bat: {
    height: 20,
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  text_xem_them: {
    fontSize: 12,
  },
  text_noi_bat: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
  },
  view_conten_noi_bat: {
    backgroundColor: '#fff',
  },
  noibat_1: {
    // backgroundColor: "tomato",
    paddingTop: 5,
    paddingBottom: 5,
  },
  hinh: {
    borderRadius: 10,
    // backgroundColor: "tomato",
  },
  text_title: {fontSize: 13, fontWeight: '900', color: '#000'},
});
