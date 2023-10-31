package keeper_test

import (
	"testing"

	testkeeper "cognizant-blockchain/testutil/keeper"
	"cognizant-blockchain/x/mynft/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MynftKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
