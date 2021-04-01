import React from 'react';
import { View } from 'react-native';
import {
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {
  Avatar,
  AvatarProps,
  ButtonProps,
  Button,
  Icon
} from 'react-native-ui-kitten';


class ProfilePhotoComponent extends React.Component {

   renderEditElement = ()  => {
    const buttonElement  = this.props.button();

    return React.cloneElement(buttonElement, {
      style: [buttonElement.props.style, this.props.themedStyle.editButton],
    });
  };

  renderPhotoButtonIcon = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="plus" />;
  };

  renderPhotoButton = () => {
    const {themedStyle} = this.props;

    return (
      <Button
        style={[this.props.themedStyle.editButton, themedStyle.photoButton]}
        activeOpacity={0.95}
        icon={this.renderPhotoButtonIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

   render()  {
    const { style, themedStyle, button, ...restProps } = this.props;

    return (
      <View style={style}>
        <Avatar
          style={[style, themedStyle.avatar]}
          {...restProps}
        />
        {
          //this.renderPhotoButton()
        }
      </View>
    );
  }
}

export const ProfilePhoto = withStyles(ProfilePhotoComponent, (theme ) => ({
  avatar: {
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  photoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{translateY: 80}],
    borderColor: theme['border-basic-color-2'],
    backgroundColor: theme['background-basic-color-2'],
  },
  photoButtonIcon: {
    width: 24,
    height: 24,
    tintColor: theme['color-primary-default'],
  },
}));

