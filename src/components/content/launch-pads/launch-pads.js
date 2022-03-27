import React, {useRef} from "react";
import {
  Box, Button,
  SimpleGrid,
  useDisclosure
} from "@chakra-ui/core";

import Error from "../../base/error";
import Breadcrumbs from "../../base/breadcrumbs";
import LoadMoreButton from "../../base/load-more-button";
import {useSpaceXPaginated} from "../../../services/use-space-x";
import {toFavorite} from "../../../services/favorites";
import {LaunchPadItem} from "./launch-pad-item";
import useLocalStorage from "../../../hooks/use-local-storage";
import {LayoutDrawer} from "../../layout/layout-drawer";

const PAGE_SIZE = 12;

export default function LaunchPads() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const favBtnRef = useRef()

  const {data, error, isValidating, size, setSize} = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );

  const [favorites, setFavorites] = useLocalStorage('launch-pads', []);
  const toggleFavorite = (e, launchPad) => {
    e.preventDefault();
    e.stopPropagation();

    const isFavorite = !!favorites?.find(item => item.id === launchPad.site_id);
    let copy = [...favorites];
    if (isFavorite) {
      copy = copy.filter(item => item.id !== launchPad.site_id);
    } else {
      copy.push(toFavorite(launchPad));
    }

    setFavorites(copy);
  }

  const removeFavorite = (e, favorite) => {
    e.preventDefault();
    e.stopPropagation();

    let favCopy = favorites?.length ? [...favorites] : [];
    favCopy = favCopy.filter(item => item.id !== favorite.id);
    setFavorites(favCopy)
  };

  return (
    <LayoutDrawer favorites={favorites} removeFavorite={removeFavorite} isOpen={isOpen}
                  onClose={onClose} favBtnRef={favBtnRef}>
      <Box d="flex" alignItems="baseline" justifyContent="space-between">
        <Breadcrumbs
          items={[{label: "Home", to: "/"}, {label: "Launch Pads"}]}
        />
        <Button ref={favBtnRef} colorScheme='teal' mr="6" onClick={onOpen}>
          Favorites ({favorites.length})
        </Button>
      </Box>
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error/>}
        {data &&
        data
          .flat()
          .map((launchPad) => (
            <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} favorites={favorites}
                           toggleFavorite={toggleFavorite}/>
          ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </LayoutDrawer>
  );
}
