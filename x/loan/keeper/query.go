package keeper

import (
	"cognizant-blockchain/x/loan/types"
)

var _ types.QueryServer = Keeper{}
