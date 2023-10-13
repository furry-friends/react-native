import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { icons } from '../../assets';
import IconButton from '../../components/IconButton/IconButton';
import styles from './Header.styles';
import { debounce } from 'frontend-lib';

interface HeaderProps {
  onSearch: (value: string) => void;
}
const debounceSearch = debounce(300);

const Header: React.FC<HeaderProps> = ({ onSearch }): JSX.Element => {
  const [keyword, setKeyword] = React.useState<string>('');

  const [isSearchbarVisible, setIsSearchbarVisible] =
    React.useState<boolean>(false);

  const handleSearch = (value: string): void => {
    setKeyword(value);

    debounceSearch((): void => {
      onSearch(value);
    });
  };

  return (
    <View style={styles.container}>
      {isSearchbarVisible ? (
        <>
          <TextInput
            style={styles.searchInput}
            value={keyword}
            onChange={(e): void => handleSearch(e.nativeEvent.text)}
          />
          <Button
            title="Cancel"
            color="#f6f6f6"
            onPress={(): void => {
              handleSearch('');
              setIsSearchbarVisible(false);
            }}
          />
        </>
      ) : (
        <>
          <View style={styles.logo}>
            <Image
              source={icons.logo}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>Furry Friends</Text>
          </View>
          <IconButton
            icon={icons.magnifier}
            iconSize={20}
            onPress={(): void => setIsSearchbarVisible(true)}
          />
        </>
      )}
    </View>
  );
};

export default Header;
