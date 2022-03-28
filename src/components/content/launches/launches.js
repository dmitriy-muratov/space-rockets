import React, {useRef} from "react";
import {
  Box,
  Button,
  SimpleGrid,
  useDisclosure
} from "@chakra-ui/core";

import {useSpaceXPaginated} from "../../../services/use-space-x";
import Error from "../../base/error";
import Breadcrumbs from "../../base/breadcrumbs";
import LoadMoreButton from "../../base/load-more-button";
import {LaunchItem} from "./launch-item";
import {toFavorite} from "../../../services/favorites";
import {LayoutDrawer} from "../../layout/layout-drawer";
import useLocalStorage from "../../../hooks/use-local-storage";

const PAGE_SIZE = 12;

export default function LaunchesLayout() {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const favBtnRef = useRef();

  const {data, error, isValidating, setSize, size} = useSpaceXPaginated(
    "/launches/past",
    {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    }
  );

  const [favorites, setFavorites] = useLocalStorage('launches', []);
  const toggleFavorite = (e, launch) => {
    e.preventDefault();
    e.stopPropagation();

    const isFavorite = !!favorites?.find(item => item.id === launch.flight_number);
    let copy = [...favorites];
    if (isFavorite) {
      copy = copy.filter(item => item.id !== launch.flight_number);
    } else {
      copy.push(toFavorite(launch));
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
          items={[{label: "Home", to: "/"}, {label: "Launches"}]}
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
          .map((launch) => (
            <LaunchItem launch={launch} toggleFavorite={toggleFavorite} favorites={favorites}
                        key={launch.flight_number}/>
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
