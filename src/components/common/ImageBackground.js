import React, {Component} from 'react';
import {StyleSheet, Animated, View, Easing} from 'react-native';
import PropTypes from 'prop-types';

class ImageBG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentImage: null,
            first: true
        };
        this.animasyonDegeri = new Animated.Value(0);
    }

    componentDidMount() {
        this.setCurrentBackground();
        this._interval = setInterval(() => {
            this.setCurrentBackground();
        }, this.props.changeTime);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    setCurrentBackground() {
        let newBackground = this.updateBackground();
        this.oynat(newBackground);
    }

    updateBackground() {
        let images = this.props.imagePaths.filter(path => path !== this.state.currentImage);
        let randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    oynat(image) {
        this.animasyonDegeri.setValue(0);
        let duration = this.state.first ? 0 : this.props.animation.duration;
        this.setState({first: false});
        Animated.parallel([
            Animated.timing(
                this.animasyonDegeri,
                {
                    toValue: 1,
                    duration: duration,
                    easing: this.props.animation.easing
                }
            )
        ]).start(() => this.setState({currentImage: image}));
    }

    render() {
        const opacity = this.animasyonDegeri.interpolate({
            inputRange: [0.6, 0.8, 1],
            outputRange: [1, 0.5, 1]
        });

        return (
            <View style={{flex: 1}}>
                <Animated.Image source={this.state.currentImage}
                                resizeMode='cover'
                                style={[
                                    styles.background,
                                    {
                                        opacity: opacity
                                    }
                                ]}
                >
                </Animated.Image>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});

ImageBG.propTypes = {
    children: PropTypes.any,
    imagePaths: PropTypes.arrayOf(PropTypes.number),
    changeTime: PropTypes.number,
    animation: PropTypes.shape({
        duration: PropTypes.number,
        easing: PropTypes.func
    })
};

ImageBG.defaultProps = {
    changeTime: 10000,
    animation: {
        duration: 100,
        easing: Easing.linear
    }
};

export default ImageBG;
